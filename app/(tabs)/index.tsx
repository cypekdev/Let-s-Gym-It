import { /*Text,*/ StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/Themed';
import Calendar from '@/components/Calendar';
import Advices from '@/components/Advices';
import Objectives from '@/components/Objectives';
import Statistics from '@/components/Statistics';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={ [styles.header, {fontFamily: 'Oswald'}] }>Let's Gym It</Text>
      <Calendar />
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
    alignItems: 'center',
    justifyContent: 'center',
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
