/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

interface UnderlineTargetProps {
  text: string;
  targetIndex: number;
  style: any;
}

const UnderlineTarget: React.FC<UnderlineTargetProps> = ({
  text,
  targetIndex,
  style,
}) => {
  const words = text.split(' ');
  const formattedText = words.map((word, index) => {
    const isTarget = index === targetIndex;
    const wordWithSpace = isTarget ? `${word} ` : word;
    return (
      <Text key={index}>
        <Text style={{textDecorationLine: isTarget ? 'underline' : 'none'}}>
          {wordWithSpace}
        </Text>
        &nbsp;
      </Text>
    );
  });

  return <Text style={{...style}}>{formattedText}</Text>;
};

export default UnderlineTarget;
