import { Button, StyleSheet, useColorScheme, View } from "react-native"
import { Link, useRouter } from "expo-router"
import { Text } from "@/components/Themed";
import { use } from "react";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
// import { View } from "@/components/Themed";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={ styles.container }>
      <Text>UsernameHere</Text>
      <Link style={ styles.link } href={'/_sitemap'}>Dane o użytkowniku</Link>
      <Link style={ styles.link } href={'/login'}>Wyloguj</Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
  link: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    color: useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text,
  }
});