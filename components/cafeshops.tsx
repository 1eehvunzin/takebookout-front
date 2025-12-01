import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import mockDB from "../assets/data/mock-db.json";
import AddBtn from "./addbtn";
import CafeShop from "./cafeshop";

export default function CafeShops() {
  //CafeShop 컴포넌트 리스트
  const [shops, setShops] = useState(mockDB.shops);

  const handleAddShop = () => {
    setShops([
      ...shops,
      {
        id: Date.now(),
        name: `카페${shops.length + 1}`,
        //image: require("../assets/images/cafeshops/1.png"), // 또는 랜덤
      },
    ]);
  };

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
        {shops.map((item) => (
          <View key={item.id} style={{ marginRight: 45 }}>
            <CafeShop name={item.name} />
          </View>
        ))}

        <AddBtn onPress={handleAddShop} />
      </ScrollView>
    </View>
  );
}
