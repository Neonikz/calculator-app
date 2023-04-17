import {useRef, useState} from 'react';

export enum Operators {
  add,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {
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

  return {
    previousNumber,
    number,
    cleanNumber,
    armNumber,
    positiveNegativeNumber,
    deleteNumber,
    buttonForOperations,
    calculateNumbers,
  };
};

export default useCalculator;
