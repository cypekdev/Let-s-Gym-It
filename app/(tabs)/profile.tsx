import { Button, StyleSheet, View } from "react-native"
import { useRouter } from "expo-router"
// import { View } from "@/components/Themed";

export default function ProfileScreen() {
  const router = useRouter();

  return (<>

    <View style={ styles.container }>
      <Button onPress={ () => router.navigate('/login') } title="Logout"></Button>

    </View>
  </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});