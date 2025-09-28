import { /* Text, */ 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableNativeFeedback, 
  useColorScheme, 
  ScrollView, 
  KeyboardAvoidingView } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text/* , View */ } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/constants/Colors';

function SendButton() {
  return (
    <View style={ styles.inputRowElement }>
      <TouchableNativeFeedback onPress={ () => { router.push('/day') }}>
        <AntDesign name="login" size={ 24 } color={ useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text } />
      </TouchableNativeFeedback>
    </View>
  )
}


export default function TrainerScreen() {
  // useEffect(() => {
  //   router.push('/day')

  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView>
          <Text style={{ paddingVertical: 20 }}>Hello! I'm your AI personal trainer. How can I assist you today?</Text>
          <Text style={{ paddingVertical: 20 }}>You can ask me for workout routines, nutrition advice, or any fitness-related questions you may have. Let's get started on your fitness journey together!</Text>
          <Text style={{ paddingVertical: 20 }}>Feel free to type your questions or requests below, and I'll do my best to help you achieve your fitness goals.</Text>
          <Text style={{ paddingVertical: 20 }}>Feel free to type your questions or requests below, and I'll do my best to help you achieve your fitness goals.</Text>
          <Text style={{ paddingVertical: 20 }}>Feel free to type your questions or requests below, and I'll do my best to help you achieve your fitness goals.</Text>
        </ScrollView>
        <View style={ styles.inputRow }>
          <TextInput placeholderTextColor={ useColorScheme() === 'dark' ? Colors.dark.border : Colors.light.border } placeholder='Zapytaj trenera o plan' style={ [ styles.inputRowElement, styles.input ] }></TextInput>
          <SendButton />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const highlightColor = useColorScheme() === 'dark' ? Colors.dark.highlight : Colors.light.highlight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  inputRowElement: {
    height: 36,
    backgroundColor: highlightColor,
    borderWidth: 1,
    borderColor: useColorScheme() === 'dark' ? Colors.dark.border : Colors.light.border,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 2.5,
    borderRadius: 20,
  },
  input: {
    alignItems: 'stretch',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 13,
    color: useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text,
  }
});
