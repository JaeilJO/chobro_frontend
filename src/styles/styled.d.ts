import 'styled-components';
import { ColorTypes, DarkColorType, FontSizeTypes, FontWeightTypes, LightColorType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        LIGHT: {
            COLOR: LightColorType;
            FONT_SIZE: FontSizeTypes;
            FONT_WEIGHT: FontWeightTypes;
        };
        DARK: {
            COLOR: DarkColorType;
            FONT_SIZE: FontSizeTypes;
            FONT_WEIGHT: FontWeightTypes;
        };
    }
}
