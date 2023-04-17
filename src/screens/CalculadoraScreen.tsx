import {styles} from '../theme/appTheme';
import {View, Text} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const cleanNumber = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const armNumber = (textNumber: string) => {
    //Don't accept double point
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Decimal point
      if (textNumber === '.') {
        setNumber(number + textNumber);

        //Evaluate if is other zero and if there is a decimal point
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        //Evaluate if is a diferent zero and if there is no a decimal point
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        //Avoid 000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegativeNumber = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const deleteNumber = () => {
    if (number.includes('-') && number.length === 2) {
      return setNumber('0');
    }
    setNumber(number.length === 1 ? '0' : number.slice(0, -1));
  };

  const changeNumberToPreviousOne = () => {
    if (number.endsWith('.')) {
      return setPreviousNumber(number.slice(0, -1));
    }
    setPreviousNumber(number);
    setNumber('0');
  };

  const buttonForOperations = (operator: Operators) => {
    changeNumberToPreviousOne();
    lastOperation.current = operator;
  };

  const calculateNumbers = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${number1 + number2}`);
        break;
      case Operators.substract:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.multiply:
        setNumber(`${number1 * number2}`);
        break;
      case Operators.divide:
        setNumber(`${number2 / number1}`);
        break;
    }
    setPreviousNumber('0');
  };

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
