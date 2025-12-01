import { Image, Text, View } from "react-native";

export default function CafeShop({ name, src }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={src}
        style={{
          width: 130,
          height: 130,
          position: "absolute",
          zIndex: 100,
          bottom: 52,
        }}
      ></Image>

      <View style={{ flexDirection: "row" }}>
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
            width: 78,
            textAlign: "center",
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            zIndex: 102,
            bottom: 22,
            color: "white",
            textShadowColor: "rgba(0,0,0,0.25)",
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 4,
            textAlign: "center",
          }}
        >
          ✏️
        </Text>
      </View>
    </View>
  );
}
