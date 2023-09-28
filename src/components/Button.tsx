import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated, {FadeInLeft} from 'react-native-reanimated';

interface IButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  ctaButton: () => void;
  ctaStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<IButtonProps> = ({
  style,
  ctaButton,
  text,
  ctaStyle,
}) => {
  return (
    <Animated.View style={style} entering={FadeInLeft.duration(650)}>
      <TouchableOpacity onPress={ctaButton}>
        <Text style={ctaStyle}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
