import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const CalculatorButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.textButton}>1</Text>
    </View>
  );
};

export default CalculatorButton;
