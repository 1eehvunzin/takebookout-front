import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Scan() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/bookview")}>
      <View
        style={{
          flexDirection: "column",
          alignSelf: "stretch",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 29,
            marginBottom: "15",
          }}
        >
          <Image source={require("../assets/images/docsicon.png")} />
          <View>
            <Text style={{ fontSize: 14, fontFamily: "Galmuri9", margin: 5 }}>
              1장 여행의 시작, 디테일의 시작
            </Text>
            <Text style={{ fontSize: 13, fontFamily: "Galmuri9", margin: 5 }}>
              31p~39p
            </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: 13,
                fontFamily: "Galmuri9",
                margin: 5,
                color: "rgba(13, 8, 66, 0.52)",
                maxWidth: 310,
              }}
            >
              여행은 공항버스에서부터 시작된다 저희 집에서 공항까지는 공항버스로
              1시간 30분 정도 걸립니다. 버스 안에서
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "#000",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
