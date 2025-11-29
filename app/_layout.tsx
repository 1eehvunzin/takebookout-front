import { useFonts } from "expo-font";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Galmuri9: require("../assets/font/Galmuri9.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Slot />;
}
