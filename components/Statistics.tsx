import { useMemo } from "react";
import { LineChart, CurveType } from "react-native-gifted-charts";
import { type LineChartPropsType } from 'gifted-charts-core';
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

interface ThemedOptionalProps {
  light: LineChartPropsType,
  dark: LineChartPropsType
}

const ThemedProps: ThemedOptionalProps = {
  light: {
    textColor: Colors.light.text.toString(),
    yAxisColor: Colors.light.border.toString(),
    xAxisColor: Colors.light.border.toString(),
    yAxisTextStyle: { color: Colors.light.text },
    yAxisIndicesColor: Colors.light.border,
    rulesColor: Colors.light.border,
  },
  dark: {
    textColor: Colors.dark.text.toString(),
    yAxisColor: Colors.dark.border.toString(),
    xAxisColor: Colors.dark.border.toString(),
    yAxisTextStyle: { color: Colors.dark.text },
    yAxisIndicesColor: Colors.dark.border,
    rulesColor: Colors.dark.border,
  }
}


export default function Statistics() {

  const data = useMemo(() => {
    const data: { value: number }[] = [];

    for (let i = 1; i < 10; i++) {
      data.push({value: Math.log(i*40)});  
    }

    return data;
  }, [])

  const colorProps = useColorScheme() === 'dark' ? ThemedProps.dark : ThemedProps.light;
  return (
    <LineChart
      {...colorProps}  

      // curved
      // curveType={ CurveType.CUBIC }
      areaChart
      data={ data }
      // data2={ data.map(({ value }) => ( { value: value - 2 } )) }
      startFillColor="rgb(46, 217, 255)"
      startFillColor2="rgb(46, 255, 157)"
      color="rgb(0, 176, 216)"
      thickness={1}
      dataPointsColor="rgb(46, 217, 255)"
      startOpacity={0.6}
      endOpacity={0}
      scrollToEnd={true}
    />
  );
}



