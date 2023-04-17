import React from 'react';
import {styles} from '../theme/appTheme';
import {View, Text} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.littleResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <CalculatorButton />
      </View>
    </View>
  );
};

export default CalculatorScreen;
