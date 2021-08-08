import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "rgba( 255, 255, 255, 0.55 )",
  primaryBright: "#ffc2d4",
  primaryDark: "#822a44",
  secondary: "rgba( 255, 255, 255, 0.25 )",
  success: "rgba( 0, 230, 118, 0.55 )",
  warning: "rgba( 255, 178, 55, 0.55 )",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "rgba( 100, 100, 100, 0.25 )",
  cardBorder: "rgba( 100, 100, 100, 0.25 )",
  contrast: "#191326",
  invertedContrast: "#e2cfcf2b",
  input: "rgba( 223, 206, 249, 0.30 )",
  inputSecondary: "rgba( 223, 206, 249, 0.65 )",
  tertiary: "rgba( 255, 255, 255, 0.30 )",
  text: "#ffffff",
  textDisabled: "rgba( 102, 100, 100, 0.25 )",
  textSubtle: "rgba( 255, 255, 255, 0.6 )",
  borderColor: "rgba( 255, 255, 255, 0.18 )",
  card: "rgba( 100, 100, 100, 0.25 );",
  gradients: {
    bubblegum: "rgba( 255, 255, 255, 0.30 )",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#FFFFFF",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
