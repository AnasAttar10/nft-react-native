import { useFonts } from "expo-font";
import React from "react";
import { StatusBar } from "react-native";
import { COLORS } from "@constants/theme";
import AppNavigation from "navigations/AppNavigation";
const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_Light: require("@assets/fonts/Roboto/Roboto-Light.ttf"),
    Roboto_Regular: require("@assets/fonts/Roboto/Roboto-Regular.ttf"),
    Roboto_Medium: require("@assets/fonts/Roboto/Roboto-Medium.ttf"),
    Roboto_Bold: require("@assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.bg} />
      <AppNavigation />
    </>
  );
};
export default App;
