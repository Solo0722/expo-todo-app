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
import { SafeAreaView } from "react-native-safe-area-context";
enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "plusSans-thin": require("./src/assets/fonts/PlusSans/PlusJakartaSans-ExtraLight.ttf"),
    "plusSans-light": require("./src/assets/fonts/PlusSans/PlusJakartaSans-Light.ttf"),
    "plusSans-regular": require("./src/assets/fonts/PlusSans/PlusJakartaSans-Regular.ttf"),
    "plusSans-medium": require("./src/assets/fonts/PlusSans/PlusJakartaSans-Medium.ttf"),
    "plusSans-semibold": require("./src/assets/fonts/PlusSans/PlusJakartaSans-SemiBold.ttf"),
    "plusSans-bold": require("./src/assets/fonts/PlusSans/PlusJakartaSans-Bold.ttf"),
    "plusSans-extrabold": require("./src/assets/fonts/PlusSans/PlusJakartaSans-ExtraBold.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "plusSans-regular",
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
          <StatusBar backgroundColor="#181820" />
          <MainNavigator />
        </GlobalProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
