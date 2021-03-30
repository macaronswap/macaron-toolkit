import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "rgba( 241, 121, 153, 0.55 )",
  primaryBright: "rgba( 255, 184, 204, 0.55 )",
  primaryDark: "rgba( 149, 34, 70, 0.65 )",
  secondary: "rgba( 118, 69, 217, 0.55 )",
  success: "rgba( 0, 230, 118, 0.55 )",
  warning: "rgba( 255, 178, 55, 0.55 )",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,17,95,1) 35%, rgba(28,17,95,1) 100%)",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "rgba( 223, 206, 249, 0.30 )",
  inputSecondary: "rgba( 223, 206, 249, 0.65 )",
  tertiary: "#EFF4F5",
  text: "#ffecf3",
  textDisabled: "#c595a7",
  textSubtle: "#8f80ba",
  borderColor: "rgba( 255, 255, 255, 0.18 )",
  card: "rgba( 236, 120, 153, 0.25 )",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #f3efff 0%, #FFEFF2 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#EC7899",
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
