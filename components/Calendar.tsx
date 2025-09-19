import { /*Text, View,*/ StyleSheet, TouchableNativeFeedback } from "react-native";
import { View, Text } from "./Themed";
import { useMemo } from "react";
import { router } from "expo-router";


interface DayDate {
  year: number;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
}
interface Training {

}
interface TrainingData {
  date: DayDate;
  training?: Training;
}
type Week = TrainingData[]
type DaysDictionary = [string, string, string, string, string, string, string]


function getDayDate(date: Date): DayDate {
  return {
    year: date.getFullYear(),
    month: (date.getMonth() + 1) as DayDate['month'],
    day: date.getDate() as DayDate['day']
  }
}

function openDayDetails(date: DayDate) {
  const query = `year=${date.year}&month=${date.month}&day=${date.day}`
  router.push(`/day?${query}`)
}

function Day({ date }: { date: DayDate }) {
  
  const isToday = useMemo(() => {
    const today = new Date()
    return today.getFullYear() === date.year && (today.getMonth() + 1) === date.month && today.getDate() === date.day
  }, [])

  
  return (
    <TouchableNativeFeedback onPress={openDayDetails.bind(null, date)}>
      <View style={ [styles.calendarCell, isToday && styles.currentDay] }>
          <Text>{ date.day }</Text>
      </View>
    </TouchableNativeFeedback>)
}


export default function Calendar() {
  const date = new Date()
  const calIterator = new Date()

  calIterator.setDate(date.getDate() - ((date.getDay() + 6)) % 7)

  const weekDictionary: DaysDictionary = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  const weeks: Week[] = []

  for (let i = 0; i < 2; i++) {
    const week: Week = [];
    for (let j = 0; j < 7; j++) {
      week.push( { date: getDayDate(calIterator) } )
      calIterator.setDate( calIterator.getDate() + 1 )
    }
    weeks.push(week)
  }


  return (<View style={ styles.calendar }>
    <View style={ styles.calendarRow }>
      {weekDictionary.map((day, index) => 
        <View key={ index } style={ styles.calendarHeader }>
          <Text>{ day }</Text>
        </View>
      )}
    </View>

    {weeks.map((week, index) => 
      <View key={ index } style={ styles.calendarRow }>{
        week.map(({ date }, index) => 
          <Day key={ index } date={ date } />
        )}
      </View>
    )}
  </View>)
}



const styles = StyleSheet.create({
  currentDay: {
    backgroundColor: '#333a',
    color: '#fff',
  },
  calendar: {
    flexDirection: 'column',
    margin: 10
  },
  calendarRow: {
    flexDirection: 'row'
  },
  calendarHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  calendarCell: {
    borderWidth: 1,
    borderColor: '#333',
    flex: 1,
    alignItems: 'center',
    height: 60,
  }
})
