import { Image, Text, View } from "react-native";

type BookProps = {
  name: string;
};

export default function Book({ name }: BookProps) {
  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/book.png")} />

      <Text
        style={{
          position: "absolute",
          bottom: 4,
          paddingHorizontal: 6,
          paddingVertical: 3,
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 5,
          color: "white",
          fontFamily: "Galmuri9",
          fontSize: 9,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
}
