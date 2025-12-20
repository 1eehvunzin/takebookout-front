import { Image, TouchableOpacity } from "react-native";

export default function ScanAddBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: "center", marginTop: 25 }}
    >
      <Image
        source={require("../assets/images/add.png")}
        style={{
          width: 43,
          height: 43,
        }}
      ></Image>
    </TouchableOpacity>
  );
}
