import CafeShops from "@/components/cafeshops";
import NameInput from "@/components/nameinput";
import { useState } from "react";
import { ImageBackground, Keyboard, Text, View } from "react-native";
import mockDB from "../assets/data/mock-db.json";
const images = [
  require("../assets/images/cafeshops/1.png"),
  require("../assets/images/cafeshops/2.png"),
  require("../assets/images/cafeshops/3.png"),
  require("../assets/images/cafeshops/4.png"),
];

export default function Home() {
  const [shops, setShops] = useState(
    mockDB.shops.map((shop, i) => ({
      ...shop,
      image: images[i % images.length], //초기 데이터도 이미지 지정
    }))
  );
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const [newName, setNewName] = useState("");

  const handleNameInput = () => {
    setIsNameInputVisible(true);
  };

  // 이름 입력 후 엔터(완료) 눌렀을 때
  const handleSubmitName = () => {
    const trimmed = newName.trim();
    if (!trimmed) {
      setIsNameInputVisible(false);
      return;
    }

    setShops((prev) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];

      return [
        ...prev,
        {
          id: Date.now(),
          name: trimmed,
          image: randomImage,
        },
      ];
    });

    setNewName("");
    setIsNameInputVisible(false);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "40%", width: "100%" }}>
        <ImageBackground
          source={require("../assets/images/BG-sky.png")}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 60,
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Galmuri9",
                }}
              >
                TAKE BOOK OUT→
              </Text>
              <NameInput
                visible={isNameInputVisible}
                value={newName}
                onChangeText={setNewName}
                onSubmitEditing={handleSubmitName}
                hint="새로운 서재 (카페) 의 이름을 입력해주세요"
              />
            </View>
          </View>
          <CafeShops shops={shops} onPressAdd={handleNameInput} />
        </ImageBackground>
      </View>

      <View style={{ height: "60%", backgroundColor: "brown" }}>
        <ImageBackground
          source={require("../assets/images/BG-wood.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    </View>
  );
}
