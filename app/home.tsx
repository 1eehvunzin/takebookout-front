import { Image, ImageBackground, View } from "react-native";

export default function Home() {
  return (
    <View style={{ height: "100vh", width: "100vw" }}>
      <View style={{ height: "40%", width: "100%" }}>
        <ImageBackground
          source={require("../assets/images/BG-sky.png")}
          style={{ height: "100%", width: "100%", justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <Image
            source={require("../assets/images/BG-grass.png")}
            style={{ width: "100%" }}
          />
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
