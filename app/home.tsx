import CafeShops from "@/components/cafeshops";
import { ImageBackground, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "40%", width: "100%" }}>
        <ImageBackground
          source={require("../assets/images/BG-sky.png")}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
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
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontFamily: "Galmuri9" }}>
                TAKE BOOK OUT→
              </Text>
            </View>
          </View>
          <CafeShops />
        </ImageBackground>
      </View>

      <View style={{ height: "60%", backgroundColor: "brown" }}>
        <ImageBackground
          source={require("../assets/images/BG-wood.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    </View>
  );
}
