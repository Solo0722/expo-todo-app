import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#818cf8",
  // secondaryColor: "#fafbff",
  secondaryColor: "#f9fbff",
  white: "#fff",
  black: "#000",
  itemColor: "#f1f5f9",
};

export const nativebaseTheme = extendTheme({
  colors: {
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
  },
  fontConfig: {
    Colfax: {
      100: {
        normal: "colfax-thin",
        italic: "colfax-thin",
      },
      200: {
        normal: "colfax-thin",
        italic: "colfax-thin",
      },
      300: {
        normal: "colfax-thin",
        italic: "colfax-thin",
      },
      400: {
        normal: "colfax-light",
        italic: "colfax-light",
      },
      500: {
        normal: "colfax-light",
        italic: "colfax-light",
      },
      600: {
        normal: "colfax-regular",
        italic: "colfax-regular",
      },
      700: {
        normal: "colfax-regular",
        italic: "colfax-regular",
      },
      800: {
        normal: "colfax-bold",
        italic: "colfax-bold",
      },
      900: {
        normal: "colfax-bold",
        italic: "colfax-bold",
      },
    },
  },
  fonts: {
    heading: "Colfax",
    body: "Colfax",
    mono: "Colfax",
  },
});
