import Card from "./Card"
import { Text } from "./Themed"
import { /* Text,*/ ScrollView, StyleSheet } from "react-native"

export default function Objectives() {
  const objectives: string[] = [
    'Zbudować 3–5 kg masy mięśniowej w ciągu 6 miesięcy.',
    'Wykonać martwy ciąg z ciężarem równym własnej masie ciała w 3 miesiące.',
    'Zmniejszyć poziom tkanki tłuszczowej o 3–5% w 4 miesiące.',
    'Poprawić mobilność i zakres ruchu (np. pełny przysiad ATG w 2 miesiące).',
    'Regularny trening 3–4 razy w tygodniu przez minimum 12 tygodni bez przerw.'
  ]
  
  return (
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      style={ styles.objectives }>{
      objectives.map((advice, index) => 
        <Card key={ index }>
          <Text>{ advice }</Text>
        </Card>)
    }</ScrollView>
  )
}

const styles = StyleSheet.create({
  objectives: {
    padding: 5,
    flexDirection: 'row'
  }
})
