import "react-native-gesture-handler";
import TabNavigator from "./src/navigations/TabNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { setCustomText } from "react-native-global-props";
import { NativeBaseProvider } from "native-base";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import { nativebaseTheme } from "./src/theme/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "colfax-thin": require("./src/assets/fonts/Colfax-Thin.otf"),
    "colfax-light": require("./src/assets/fonts/Colfax-Light.otf"),
    "colfax-regular": require("./src/assets/fonts/Colfax-Regular.otf"),
    "colfax-bold": require("./src/assets/fonts/Colfax-Bold.otf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "colfax-light",
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
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
