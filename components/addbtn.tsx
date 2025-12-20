import { Image, TouchableOpacity, ViewStyle } from "react-native";

type AddBtnProps = {
  onPress?: () => void;
  style?: ViewStyle;
};

export default function AddBtn({ onPress, style }: AddBtnProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ alignItems: "center" }, style]}
    >
      <Image
        source={require("../assets/images/add.png")}
        style={{
          width: 43,
          height: 43,
          position: "absolute",
          zIndex: 100,
          bottom: 90,
          left: 1,
        }}
      ></Image>
    </TouchableOpacity>
  );
}
