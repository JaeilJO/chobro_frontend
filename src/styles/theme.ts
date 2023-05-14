import { DefaultTheme } from 'styled-components';

// All key names should be in uppercase

//Light Mode
const lightTheme = {
    PRIMARY: '#0080ff',
    PRIMARY_FOCUS: '#006deb',
    SECOND: '#4E9AD2',
    SECOND_FOCUS: '#4182b0',
    THIRD: '#BEDAEF',
    BLACK: '#2F2F2F',
    GRAY: '#F0F0F0',
    DANGER: '#FF8181',
    WARNING: '#FFBD3C',
    WHITE: '#FFFFFF',
};

//Dark Mode
const darkTheme = {};

//FONT_SIZE, FONT_WEIGHT
const defaultTheme = {
    FONT_SIZE: {
        SM: '0.8rem',
        MD: '1rem',
        L: '1.5rem',
        XL: '2rem',
        XXL: '2.5rem',
        XXXL: '3rem',
    },
    FONT_WEIGHT: {
        THIN: '300',
        MEDIUM: '500',
        BOLD: '700',
    },
};

//Theme Types
export type LightColorType = typeof lightTheme;
export type DarkColorType = typeof darkTheme;
export type FontSizeType = keyof typeof defaultTheme.FONT_SIZE;
export type FontWeightType = typeof defaultTheme.FONT_WEIGHT;

// Theme
const theme: DefaultTheme = {
    LIGHT: {
        COLOR: lightTheme,
        ...defaultTheme,
    },
    DARK: {
        COLOR: darkTheme,
        ...defaultTheme,
    },
};

export default theme;
