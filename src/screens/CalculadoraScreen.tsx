import {styles} from '../theme/appTheme';
import {View, Text} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.littleResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <CalculatorButton text="C" color="#9B9B9B" />
        <CalculatorButton text="+/-" color="#9B9B9B" />
        <CalculatorButton text="del" color="#9B9B9B" />
        <CalculatorButton text="/" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" />
        <CalculatorButton text="8" />
        <CalculatorButton text="9" />
        <CalculatorButton text="x" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" />
        <CalculatorButton text="5" />
        <CalculatorButton text="6" />
        <CalculatorButton text="-" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" />
        <CalculatorButton text="2" />
        <CalculatorButton text="3" />
        <CalculatorButton text="+" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" isWide />
        <CalculatorButton text="." />
        <CalculatorButton text="=" color="#ff9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
