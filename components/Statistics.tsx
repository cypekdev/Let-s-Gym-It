import { LineChart, CurveType } from "react-native-gifted-charts";
        
export default function Statistics() {
  const data: { value: number }[] = [];

  for (let i = 0; i < 100; i++) {
    data.push({value: Math.floor(Math.random() * 10)});  
  }

  return (
    <LineChart
      // curved
      curveType={CurveType.CUBIC}
      areaChart
      data={ data }
      data2={ data.map(({ value }) => ( { value: value - 2 } )) }
      startFillColor="rgb(46, 217, 255)"
      startFillColor1="rgb(46, 255, 157)"
      color="rgb(0, 176, 216)"
      thickness={2}
      dataPointsColor="rgb(46, 217, 255)"
      startOpacity={0.7}
      endOpacity={0}
      textColor="rgb(255, 255, 255)"
      // yAxisIndicesColor={}
      yAxisColor={'#ffffff'}
      xAxisColor={'#ffffff'}
      yAxisIndicesColor={'#ffffff'}
      scrollToEnd={true}
      yAxisTextStyle={{color: '#ffffff'}}
    />
  );
}