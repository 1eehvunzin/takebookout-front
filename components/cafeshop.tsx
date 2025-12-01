import { Image, Text, View } from "react-native";

export default function CafeShop({ name }) {
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
          width: 95,
          textAlign: "center",
        }}
      >
        {name} ✏️
      </Text>
    </View>
  );
}
