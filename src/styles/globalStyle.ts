import { createGlobalStyle } from 'styled-components';
import { Roboto } from 'next/font/google';

// Setting ROBOTO font
const ROBOTO_FONT = Roboto({
    weight: ['300', '500', '700'],
    subsets: ['cyrillic', 'greek', 'latin'],
});

// Setting GlobalStyles
const GlobalStyles = createGlobalStyle`

html{
  // This is to set the default 1rem to 10px.
  font-size: 62.5%
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${ROBOTO_FONT.style.fontFamily};
    }
  
`;
export default GlobalStyles;
