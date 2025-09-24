import { /*Text,*/ StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/Themed';
import Calendar, { CalendarMode } from '@/components/Calendar';
import Advices from '@/components/Advices';
import Objectives from '@/components/Objectives';
import Statistics from '@/components/Statistics';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ [styles.header, {fontFamily: 'Oswald'}] }>Let's Gym It</Text>
      <Calendar mode={ CalendarMode.TWO_WEEKS } />
      <Text style={ styles.header }>Advices</Text>
      <Advices />
      <Text style={ styles.header }>Objectives</Text>
      <Objectives />
      <Text style={ styles.header }>Statistics</Text>
      <Statistics />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',+9
    // justifyContent: 'center',
    backgroundColor: useColorScheme() === 'dark' ? Colors.dark.background : Colors.light.background,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
