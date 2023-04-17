import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface CalculatorButtonProps {
  text: string;
  color?: string;
  isWide?: boolean;
  action: (textNumber: string) => void;
}

const CalculatorButton = ({
  text,
  color = '#2D2D2D',
  isWide = false,
  action,
}: CalculatorButtonProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: isWide ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
