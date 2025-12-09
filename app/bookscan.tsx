import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BookScan() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const router = useRouter();

  const [isCapturing, setIsCapturing] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={styles.infoText}>카메라 권한 확인 중...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.infoText}>
          문서를 찍으려면 카메라 권한이 필요합니다.
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>권한 허용하기</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCapture = async () => {
    if (!cameraRef.current || isCapturing) return;

    try {
      setIsCapturing(true);
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        skipProcessing: false,
      });

      setPhotoUri(photo.uri);
    } catch (e) {
      console.warn("사진 촬영 실패:", e);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleDone = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* 상단 안내 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>문서 스캔</Text>
        <Text style={styles.headerSubtitle}>
          자유롭게 문서를 화면에 맞춰 촬영하세요
        </Text>
      </View>

      {/* 카메라 영역 */}
      <View style={styles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          facing="back"
        />
      </View>

      {/* 하단 버튼 영역 */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={[styles.captureButton, isCapturing && { opacity: 0.5 }]}
          onPress={handleCapture}
          disabled={isCapturing}
        >
          {isCapturing ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.captureText}>스캔</Text>
          )}
        </TouchableOpacity>

        {photoUri && (
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>스캔 완료</Text>
          </TouchableOpacity>
        )}
      </View>

      {photoUri && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewTitle}>스캔된 문서 미리보기</Text>
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: "black",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Galmuri9", // ← 적용
  },
  headerSubtitle: {
    color: "#aaaaaa",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "Galmuri9", // ← 적용
  },
  cameraContainer: { flex: 1, position: "relative", overflow: "hidden" },

  bottomArea: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "black",
    gap: 12,
  },

  captureButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  captureText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    fontFamily: "Galmuri9", // ← 적용
  },

  doneButton: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#00cc88",
    borderRadius: 8,
  },
  doneButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Galmuri9", // ← 적용
  },

  previewContainer: {
    position: "absolute",
    right: 12,
    bottom: 180,
    alignItems: "flex-end",
  },
  previewTitle: {
    color: "white",
    fontSize: 12,
    marginBottom: 4,
    fontFamily: "Galmuri9", // ← 적용
  },

  previewImage: {
    width: 90,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "black",
  },
  infoText: {
    color: "white",
    textAlign: "center",
    marginTop: 12,
    fontFamily: "Galmuri9", // ← 적용
  },
  permissionButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "white",
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontFamily: "Galmuri9", // ← 적용
  },
});
