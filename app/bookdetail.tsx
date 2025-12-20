import ScanAddBtn from "@/components/scanaddbtn";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Scan from "../components/scan";

export default function BookDetail() {
  const router = useRouter();
  const { bookName } = useLocalSearchParams<{ bookName?: string }>();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "40%", width: "100%" }}>
        <ImageBackground
          source={require("../assets/images/openedbook.png")}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
            position: "relative",
            alignItems: "center",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 60,
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => router.replace("/home")}>
                <Text style={{ width: 30, textAlign: "left" }}>←</Text>
              </TouchableOpacity>

              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Galmuri9",
                }}
              >
                TAKE BOOK OUT→
              </Text>

              <View style={{ width: 30 }} />
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              bottom: 110,
              paddingHorizontal: 6,
              paddingVertical: 3,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 5,
              color: "white",
              fontFamily: "Galmuri9",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            {bookName ?? "이름 없는 책"}
          </Text>
        </ImageBackground>
      </View>

      <View
        style={{
          height: "60%",
        }}
      >
        <ImageBackground
          source={require("../assets/images/paper.png")}
          style={{ height: "100%", width: "100%", alignItems: "center" }}
          resizeMode="cover"
        >
          <Scan />
          <ScanAddBtn onPress={() => router.push("/bookscan")} />
        </ImageBackground>
      </View>
    </View>
  );
}
