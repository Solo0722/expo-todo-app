import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#abfc9d",
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
      50: "#10eff119",
      100: "#10eff110",
      200: "#10eff111",
      300: "#ecffe9",
      400: "#cbfdc3",
      500: "#abfc9d",
      600: "#9af789",
      700: "#8af277",
      800: "#7bea67",
      900: "#6de258",
    },
  },
  components: {
    Text: {
      fontWeight: "bold",
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
