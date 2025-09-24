import { ColorValue } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


type ThemedStyles = {
  text: ColorValue,
  background: ColorValue,
  tint: ColorValue,
  tabIconDefault: ColorValue,
  tabIconSelected: ColorValue,
  border: ColorValue,
  highlight: ColorValue,
}

interface Colors {
  light: ThemedStyles,
  dark: ThemedStyles
}

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    border: '#8e8e8e',
    highlight: '#bebebeff',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    border: '#3c3c3c',
    highlight: '#222',
  },
} as Colors;
