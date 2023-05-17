import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { setCustomText } from "react-native-global-props";
import { NativeBaseProvider } from "native-base";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { nativebaseTheme } from "./src/theme/theme";
import { enableScreens } from "react-native-screens";
import GlobalProvider from "./src/context/context";
import MainNavigator from "./src/navigations/MainNavigator";
import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "bellota-thin": require("./src/assets/fonts/Bellota-Light.ttf"),
    "bellota-light": require("./src/assets/fonts/Bellota-Light.ttf"),
    "bellota-regular": require("./src/assets/fonts/Bellota-Regular.ttf"),
    "bellota-bold": require("./src/assets/fonts/Bellota-Bold.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "bellota-light",
    },
  };

  setCustomText(customTextProps);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  return (
    <NativeBaseProvider theme={nativebaseTheme}>
      <NavigationContainer>
        <GlobalProvider>
          <StatusBar backgroundColor="#f9fdff" />
          <MainNavigator />
        </GlobalProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
