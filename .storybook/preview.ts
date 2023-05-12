// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyles from "../src/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import theme from "../src/styles/theme";

export const decorators = [
  withThemeFromJSXProvider({
    // Set Theme of Styled-Components on Storybook
    themes: {
      light: theme.Light,
      dark: theme.Dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,

    // Set GlobalStyle of Styled-Components on Storybook
    GlobalStyles,
  }),
];
