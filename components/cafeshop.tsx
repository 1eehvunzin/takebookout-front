import { Image, Text, View } from "react-native";

export default function CafeShop() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/cafeshops/1.png")}
        style={{
          width: 130,
          height: 130,
          position: "absolute",
          zIndex: 100,
          bottom: 52,
        }}
      ></Image>
      <View style={{ flexDirection: "row", width: "auto" }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Galmuri9",
            zIndex: 102,
            bottom: 22,
            color: "white",
            textShadowColor: "rgba(0,0,0,0.25)",
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 4,
          }}
        >
          김이화의 서재
        </Text>
        <Text
          style={{
            fontSize: 12,
            zIndex: 102,
            bottom: 22,
            left: 5,
            color: "white",
            textShadowColor: "rgba(0,0,0,0.25)",
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 4,
          }}
        >
          ✏️
        </Text>
      </View>
    </View>
  );
}
