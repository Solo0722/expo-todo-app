import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#ff0000",
  backgroundColor: "#181820",
  accentColor: "#21212b",
  white: "#fff",
  black: "#000",
};

export const nativebaseTheme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors: {
    primary: {
      50: "#ff9f9f",
      100: "#ff7777",
      200: "#ff5050",
      300: "#ff2828",
      400: "#ff0000",
      500: "#e10707",
      600: "#c30c0c",
      700: "#a81111",
      800: "#8e1313",
      900: "#751515",
    },
  },
  fontConfig: {
    PlusSans: {
      100: {
        normal: "plusSans-thin",
        italic: "plusSans-thin",
      },
      200: {
        normal: "plusSans-light",
        italic: "plusSans-light",
      },
      300: {
        normal: "plusSans-light",
        italic: "plusSans-light",
      },
      400: {
        normal: "plusSans-regular",
        italic: "plusSans-regular",
      },
      500: {
        normal: "plusSans-regular",
        italic: "plusSans-regular",
      },
      600: {
        normal: "plusSans-medium",
        italic: "plusSans-medium",
      },
      700: {
        normal: "plusSans-semibold",
        italic: "plusSans-semibold",
      },
      800: {
        normal: "plusSans-bold",
        italic: "plusSans-bold",
      },
      900: {
        normal: "plusSans-extrabold",
        italic: "plusSans-extrabold",
      },
    },
  },
  fonts: {
    heading: "PlusSans",
    body: "PlusSans",
    mono: "PlusSans",
  },
});
