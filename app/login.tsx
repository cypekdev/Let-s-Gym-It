// import { Text, View } from '@/components/Themed';
import { Text, View, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { Link, useRouter } from 'expo-router';


function LoginForm() {
  const router = useRouter();

  return (<>
    <View style={ styles.input }>
      <TextInput 
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='username'
        autoComplete='username' 
        placeholderTextColor='#666' 
        style={ {color: '#ffffff', margin: 2, marginTop: -5, marginBottom: -5, minWidth: 200 } }></TextInput>
    </View>

    <View style={ { marginVertical: 10 } }/>

    <View style={ styles.input }>
      <TextInput 
        placeholder='Hasło' 
        secureTextEntry
        textContentType='password'
        autoComplete='password'
        placeholderTextColor='#666' 
        style={ { color: '#ffffff', margin: 2, marginTop: -5, marginBottom: -5, minWidth: 200 } }></TextInput>
    </View>

    <View style={ { marginVertical: 10 } }/>

    <Button onPress={() => router.navigate('/(tabs)')} title='Zaloguj'></Button>
</>)
}


export default function LoginScreen() {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ { display: 'flex', flexDirection: 'row' } }>
        <Text style={ styles.title }>Zaloguj się lub </Text>
        <Link href="/register" style={ { ...styles.title, color: '#fff', textDecorationLine: 'underline' } }>utwórz konto</Link>      
      </View>
      <View style={ styles.separator } />

      <LoginForm />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    
    padding: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
