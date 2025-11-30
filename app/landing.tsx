import { Pressable, Text } from "react-native";

type LandingProps = {
  onPress?: () => void;
};

export default function Landing({ onPress }: LandingProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "black",
        padding: 24,
      }}
    >
      <Text
        style={{
          width: "100%",
          textAlign: "left",
          fontSize: 100,
          color: "white",
          fontFamily: "Galmuri9",
        }}
      >
        TAKE
      </Text>
      <Text style={{ color: "white", fontSize: 100, fontFamily: "Galmuri9" }}>
        BOOK
      </Text>
      <Text
        style={{
          width: "100%",
          textAlign: "right",
          fontSize: 100,
          color: "white",
          fontFamily: "Galmuri9",
        }}
      >
        OUT→
      </Text>
    </Pressable>
  );
}
