import { Image, Text, View } from "react-native";

export default function Scan() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 29,
          marginBottom: "15",
        }}
      >
        <Image source={require("../assets/images/docsicon.png")} />
        <View>
          <Text style={{ fontSize: 14, fontFamily: "Galmuri9", margin: 5 }}>
            1장 식물맹
          </Text>
          <Text style={{ fontSize: 13, fontFamily: "Galmuri9", margin: 5 }}>
            12p~34p
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Galmuri9",
              margin: 5,
              color: "rgba(13, 8, 66, 0.52)",
              maxWidth: 310,
            }}
          >
            구글 딥마인드가 인공지능의 ‘마음’을 연구하고 있는 지금, 거대한
            철학적 질문이 ...
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "#000",
        }}
      />
    </View>
  );
}
