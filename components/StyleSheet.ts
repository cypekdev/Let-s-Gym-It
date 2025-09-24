import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: useColorScheme() === 'dark' ? Colors.dark.background : Colors.light.background,
    flex: 1,
  }
})