import { FontWeights, FontSizes } from '../src/TypographyFile';

export interface ColorShades {
  lightest: string;
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
  darkest: string;
}

interface FontDetails {
  color: string;
  weight: FontWeights;
  size: FontSizes;
}

interface FontVariety {
  regular: FontDetails;
  bold: FontDetails;
}

export interface Color {
  primary: ColorShades;
  secondary: ColorShades;
}

export interface TypographyType {
  SMALL: FontVariety;
  REGULAR: FontVariety;
  LARGE: FontVariety;
}

export interface ThemeType {
  colorScheme: Color;
  typography: TypographyType;
}
