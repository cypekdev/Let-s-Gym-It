import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Day() {
  const { year, month, day } = useLocalSearchParams<{ year?: string; month?: string; day?: string }>()
  return (<SafeAreaView>
    <Text>{day} {month} {year}</Text>
  </SafeAreaView>)
}