import Card from "./Card"
import { View, Text } from "./Themed"
import { /*Text, */ ScrollView, StyleSheet } from "react-native"

export default function Advices() {
  const advices: string[] = [
    'Zdefiniuj priorytet – skup się na jednym głównym celu (np. masa, siła, redukcja), żeby uniknąć rozproszenia.',
    'Progresywne przeciążenie – regularnie zwiększaj ciężar, liczbę powtórzeń lub objętość, by wymuszać adaptację mięśni.',
    'Technika ponad ciężar – lepiej robić ćwiczenia poprawnie z mniejszym obciążeniem niż ryzykować kontuzję.',
    'Regeneracja – planuj 1–2 dni przerwy w tygodniu i dbaj o sen, bo to tam zachodzi największy progres.',
    'Notuj postępy – zapisuj wyniki (ciężary, powtórzenia, pomiary ciała), żeby widzieć realny rozwój i utrzymać motywację.'
  ]
  
  return (
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      style={ styles.advices }>{
      advices.map((advice, index) => 
        <Card key={ index }>
          <Text>{ advice }</Text>
        </Card>)
    }</ScrollView>
  )
}

const styles = StyleSheet.create({
  advices: {
    padding: 5,
    flexDirection: 'row'
  }
})
