import { View, ViewProps } from "./Themed";
import { StyleSheet, useColorScheme } from "react-native";
import { ReactNode } from "react"
import Colors from "@/constants/Colors";

export default function Card(props: { children: ReactNode } /* props: ViewProps */) {
  return <View style={ styles.card } { ...props } />;
}



const styles = StyleSheet.create({ 
  card: {
    borderRadius: 15, 
    borderColor: useColorScheme() === 'dark' ? Colors.dark.border : Colors.light.border, 
    borderWidth: 1, 
    padding: 10, 
    margin: 5,
    height: 100,
    width: 200 
  }
})
  