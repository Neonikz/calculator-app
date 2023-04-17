import {styles} from '../theme/appTheme';
import {View, Text} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator, {Operators} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    cleanNumber,
    armNumber,
    positiveNegativeNumber,
    deleteNumber,
    buttonForOperations,
    calculateNumbers,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.littleResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <CalculatorButton text="C" color="#9B9B9B" action={cleanNumber} />
        <CalculatorButton
          text="+/-"
          color="#9B9B9B"
          action={positiveNegativeNumber}
        />
        <CalculatorButton text="del" color="#9B9B9B" action={deleteNumber} />
        <CalculatorButton
          text="/"
          color="#ff9427"
          action={() => buttonForOperations(Operators.divide)}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" action={armNumber} />
        <CalculatorButton text="8" action={armNumber} />
        <CalculatorButton text="9" action={armNumber} />
        <CalculatorButton
          text="x"
          color="#ff9427"
          action={() => buttonForOperations(Operators.multiply)}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" action={armNumber} />
        <CalculatorButton text="5" action={armNumber} />
        <CalculatorButton text="6" action={armNumber} />
        <CalculatorButton
          text="-"
          color="#ff9427"
          action={() => buttonForOperations(Operators.substract)}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" action={armNumber} />
        <CalculatorButton text="2" action={armNumber} />
        <CalculatorButton text="3" action={armNumber} />
        <CalculatorButton
          text="+"
          color="#ff9427"
          action={() => buttonForOperations(Operators.add)}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" isWide action={armNumber} />
        <CalculatorButton text="." action={armNumber} />
        <CalculatorButton text="=" color="#ff9427" action={calculateNumbers} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
