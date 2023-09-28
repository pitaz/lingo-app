/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../screens/Questions/styles';

interface ReplaceWithUnderlineProps {
  text: string;
  targetIndex: number;
  style: any;
  selected: string;
}

const ReplaceWithUnderline: React.FC<ReplaceWithUnderlineProps> = ({
  text,
  targetIndex,
  style,
  selected,
}) => {
  const evaluate = (key: any) => {
    if (selected) {
      return (
        <TouchableOpacity key={key}>
          <View style={{...styles.option, marginHorizontal: 10}}>
            <Text style={styles.optionText}>{selected}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <Text key={key} style={{textDecorationLine: 'underline'}}>
        {'           '}
      </Text>
    );
  };

  const words = text.split(' ');
  const formattedText = words.map((word, index) => {
    const isTarget = index === targetIndex;
    const replacement = isTarget ? evaluate(index) : word + ' ';
    return replacement;
  });

  return (
    <Text
      style={{
        ...style,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {formattedText}
    </Text>
  );
};

export default ReplaceWithUnderline;
