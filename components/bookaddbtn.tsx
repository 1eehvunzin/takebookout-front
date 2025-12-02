import { Image, TouchableOpacity } from "react-native";

export default function BookAddBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/images/add.png")}
        style={{
          width: 43,
          height: 43,
          position: "absolute",
          zIndex: 100,
          top: 40,
          left: 35,
        }}
      ></Image>
    </TouchableOpacity>
  );
}
