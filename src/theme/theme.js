import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#9088d4",
  secondaryColor: "#f9fdff",
  white: "#fff",
  black: "#000",
  itemColor: "#f1f5f9",
};

export const nativebaseTheme = extendTheme({
  colors: {
    primary: {
      50: "#fcfcfe",
      100: "#dfdcf6",
      200: "#c3bfeb",
      300: "#aaa4de",
      400: "#9088d4",
      500: "#837bc8",
      600: "#7871bb",
      700: "#6f68ac",
      800: "#67619b",
      900: "#635f86",
    },
  },
  fontConfig: {
    Bellota: {
      100: {
        normal: "bellota-thin",
        italic: "bellota-thin",
      },
      200: {
        normal: "bellota-thin",
        italic: "bellota-thin",
      },
      300: {
        normal: "bellota-thin",
        italic: "bellota-thin",
      },
      400: {
        normal: "bellota-light",
        italic: "bellota-light",
      },
      500: {
        normal: "bellota-light",
        italic: "bellota-light",
      },
      600: {
        normal: "bellota-regular",
        italic: "bellota-regular",
      },
      700: {
        normal: "bellota-regular",
        italic: "bellota-regular",
      },
      800: {
        normal: "bellota-bold",
        italic: "bellota-bold",
      },
      900: {
        normal: "bellota-bold",
        italic: "bellota-bold",
      },
    },
  },
  fonts: {
    heading: "Bellota",
    body: "Bellota",
    mono: "Bellota",
  },
});
