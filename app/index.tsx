import React, { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Home from "./home";
import Landing from "./landing";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [showLanding, setShowLanding] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleLandingPress = () => {
    Animated.timing(translateX, {
      toValue: -width,
      duration: 500, // 애니메이션 시간(ms)
      useNativeDriver: true,
    }).start(() => {
      setShowLanding(false);
    });
  };

  return (
    <View>
      <Home />

      {/* Landing 오버레이 */}
      {showLanding && (
        <Animated.View
          style={[StyleSheet.absoluteFill, { transform: [{ translateX }] }]}
        >
          <Landing onPress={handleLandingPress} />
        </Animated.View>
      )}
    </View>
  );
}
