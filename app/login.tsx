import { Text, View } from '@/components/Themed';
import { /*Text, View,*/ StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'


export default function LoginScreen() {
  const router = useRouter()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ message, setMessage ] = useState('')

  async function handleLogin() {
    try {
      const res = await fetch('http://192.168.1.69:3000/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        setMessage(data.message)
        return;

      }

    
      const token = data.token
      
      await SecureStore.setItemAsync("jwtToken", token)
      setMessage(token)

      router.navigate('/(tabs)')
    }
    catch (error) {

    } 
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ { display: 'flex', flexDirection: 'row' } }>
        <Text style={ styles.title }>Zaloguj się lub </Text>
        <Link href="/register" style={ { ...styles.title, color: '#fff', textDecorationLine: 'underline' } }>utwórz konto</Link>      
      </View>

      <Text>{ message }</Text>

      <View style={ styles.separator } />

      <View style={ styles.input }>
        <TextInput 
          value={ username }
          onChangeText={ setUsername }
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
          value={ password }
          onChangeText={ setPassword }
          placeholder='Hasło' 
          secureTextEntry
          textContentType='password'
          autoComplete='password'
          placeholderTextColor='#666' 
          style={ { color: '#ffffff', margin: 2, marginTop: -5, marginBottom: -5, minWidth: 200 } }></TextInput>
      </View>

      <View style={ { marginVertical: 10 } }/>

      <Button onPress={handleLogin} title='Zaloguj' />
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
