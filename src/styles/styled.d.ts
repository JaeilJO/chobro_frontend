import "styled-components";
import {
  ColorTypes,
  DarkColorType,
  FontSizeTypes,
  FontWeightTypes,
  LightColorType,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    Light: {
      COLOR: LightColorType;
      FONT_SIZE: FontSizeTypes;
      FONT_WEIGHT: FontWeightTypes;
    };
    Dark: {
      COLOR: DarkColorType;
      FONT_SIZE: FontSizeTypes;
      FONT_WEIGHT: FontWeightTypes;
    };
  }
}
