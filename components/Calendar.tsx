import { /*Text, View,*/ StyleSheet } from "react-native";
import { View, Text } from "./Themed";


interface Training {

}

interface Day {
  date: number;
  training?: Training;
}
type Week = Day[]
type DaysDictionary = [string, string, string, string, string, string, string]


export default function Calendar() {

  const date = new Date()

  const calIterator = new Date()
  calIterator.setDate(date.getDate() - date.getDay() + 1)


  const weekDictionary: DaysDictionary = ['M', 'T', 'W', 'T', 'F', 'S', 'S']


  const weeks: Week[] = []

  for (let i = 0; i < 2; i++) {
    const week: Week = [];
    for (let j = 0; j < 7; j++) {
      week.push( { date: calIterator.getDate() } )
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
        week.map((day, index) => 
          <View key={ index } style={ [styles.calendarCell, day.date === date.getDate() && styles.currentDay] }>
            <Text>{ day.date }</Text>
          </View>
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
