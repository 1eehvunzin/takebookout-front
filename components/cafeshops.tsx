import { Image, View } from "react-native";
import AddBtn from "./addbtn";
import CafeShop from "./cafeshop";

export default function CafeShops() {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}
    >
      <Image
        source={require("../assets/images/BG-grass.png")}
        style={{ width: "100%", position: "absolute", zIndex: 101 }}
      />
      <View style={{ flexDirection: "row", gap: 45, alignItems: "center" }}>
        <View style={{ width: 0 }}></View>
        <CafeShop />
        <AddBtn />
      </View>
    </View>
  );
}
