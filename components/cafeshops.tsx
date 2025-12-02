import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import AddBtn from "./addbtn";
import CafeShop from "./cafeshop";

type CafeShopsProps = {
  shops: { id: number; name: string; image: any }[];
  onPressAdd: () => void;
  onPressShop: (id: number) => void;
  currentShopId: number | null;
};

export default function CafeShops({
  shops,
  onPressAdd,
  onPressShop,
  currentShopId,
}: CafeShopsProps) {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}
    >
      <Image
        source={require("../assets/images/BG-grass.png")}
        style={{ width: "100%", position: "absolute", zIndex: 0 }}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "flex-end",
          paddingHorizontal: 24,
          paddingRight: 100,
        }}
      >
        {shops.map((item) => {
          const isSelected = item.id === currentShopId;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => onPressShop(item.id)}
              style={{
                marginRight: 45,
                alignItems: "center",
              }}
              activeOpacity={0.8}
            >
              {isSelected && (
                <Image
                  source={require("../assets/images/highlight.png")}
                  style={{
                    position: "absolute",
                    top: -220,
                    zIndex: 10,
                    resizeMode: "contain",
                  }}
                />
              )}
              <CafeShop name={item.name} src={item.image} />
            </TouchableOpacity>
          );
        })}

        <AddBtn onPress={onPressAdd} />
      </ScrollView>
    </View>
  );
}
