import { PixelRatio } from "react-native";
const fontSize = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontSize,
  medium: 14 * fontSize,
  large: 18 * fontSize,
  xlarge: 24 * fontSize,
};
export const COLORS = {
  bg: "#111827",
  cardBg: "#1F2937",
  second: "#4F46E5",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
};
export const FONTS = {
  bold: "Roboto_Bold",
  medium: "Roboto_Medium",
  regular: "Roboto_Regular",
  light: "Roboto_Light",
};
