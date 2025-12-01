import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import AddBtn from "./addbtn";
import CafeShop from "./cafeshop";

export default function CafeShops() {
  //CafeShop 컴포넌트 리스트
  const [shops, setShops] = useState([{ id: 1 }]);

  const handleAddShop = () => {
    setShops([...shops, { id: Date.now() }]); // 고유 id 생성
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
            <CafeShop />
          </View>
        ))}

        {/* 마지막에 추가 버튼 */}
        <AddBtn onPress={handleAddShop} />
      </ScrollView>
    </View>
  );
}
