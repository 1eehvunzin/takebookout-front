import { useRouter } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const images = [
  require("../assets/images/bookview/1.jpg"),
  require("../assets/images/bookview/2.jpg"),
  require("../assets/images/bookview/3.jpg"),
  require("../assets/images/bookview/4.jpg"),
  require("../assets/images/bookview/5.jpg"),
  require("../assets/images/bookview/6.jpg"),
  require("../assets/images/bookview/7.jpg"),
  require("../assets/images/bookview/8.jpg"),
  require("../assets/images/bookview/9.jpg"),
  require("../assets/images/bookview/10.jpg"),
];

export default function ImageGallery() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          paddingHorizontal: 20,
          alignItems: "center",
          marginBottom: 120,
        }}
      >
        <TouchableOpacity onPress={() => router.replace("/bookdetail")}>
          <Text style={{ width: 30 }}>←</Text>
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "Galmuri9",
          }}
        >
          TAKE BOOK OUT→
        </Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Gallery */}
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width,
              height: height * 0.6,
            }}
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
}
