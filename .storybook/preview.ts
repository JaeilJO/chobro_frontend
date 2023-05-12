// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import { Provider } from 'react-redux';

export const decorators = [
    withThemeFromJSXProvider({
        // Set Theme of Styled-Components on Storybook
        themes: {
            LIGHT: theme,
            DARK: theme,
        },
        defaultTheme: 'LIGHT',
        Provider: ThemeProvider,

        // Set GlobalStyle of Styled-Components on Storybook
        GlobalStyles,
    }),
];
