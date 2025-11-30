import { Image, View } from "react-native";

export default function AddBtn() {
  return (
    <View style={{ alignItems: "center" }}>
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
    </View>
  );
}
