import React, {FC, useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {styles as gbStyles} from '../../styles/globalStyles';
import UnderlineTarget from '../../components/UnderlineTarget';
import ReplaceWithUnderline from '../../components/ReplaceWithUnderline';
import CustomButton from '../../components/Button';
import theme from '../../styles/theme';
import Animated, {SlideInDown} from 'react-native-reanimated';

const QuestionRow: FC<IQuestionRow> = ({
  data,
  result,
  scrollToIndex,
  setResult,
  questions,
}) => {
  const [selected, setSelected] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [checked, setChecked] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const handleClick = (word: string) => {
    setSelected(word);
  };

  const pillsStyle = (word: string) => {
    return {
      minWidth: 65,
      backgroundColor: selected === word ? '#6491a6' : theme.colors.white,
    };
  };
  const continueStyle = {
    backgroundColor: selected ? '#15e3e9' : '#6491a6',
  };

  const sheetColor = {
    backgroundColor: isCorrect ? theme.colors.bottomSheet : theme.colors.red,
  };
  const sheetTextColor = {
    color: isCorrect ? theme.colors.accent : theme.colors.red,
  };
  const handleScroll = () => {
    setSelected('');
    setResult((prev: any) => [...prev, {id: data.id, isCorrect}]);
    if (result.length < questions.length - 1) scrollToIndex(result.length);
  };

  const reset = () => {
    setResult([]);
    setChecked(false);
  };

  const checkWord = () => {
    if (!selected) {
      return Alert.alert(
        'Message',
        'Please provide an answer to proceed',
        [
          {
            text: 'okay',
          },
        ],
        {cancelable: false}
      );
    }
    if (selected === data.item.correctWord) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setChecked(true);
  };
  useEffect(() => {
    if (result.length === questions?.length) {
      navigation.navigate('result', {result});
    }
  }, [navigation, questions?.length, result]);

  return (
    <View style={styles.styledView}>
      <Text style={styles.instructionText}>Fill in the missing word</Text>
      <UnderlineTarget
        style={styles.englishSentence}
        text={data.item.sentence.text}
        targetIndex={data.item.sentence.indexToTranslate}
      />
      <ReplaceWithUnderline
        style={styles.englishSentence}
        text={data.item.target.text}
        targetIndex={data.item.target.indexToTranslate}
        selected={selected as string}
      />
      <View style={styles.optionsContainer}>
        {data.item.options.map((option: any, index: number) => (
          <CustomButton
            style={{
              ...styles.option,
              ...pillsStyle(option.word),
            }}
            key={index}
            ctaButton={() => handleClick(option.word)}
            ctaStyle={styles.optionText}
            text={selected === option.word ? ' ' : option.word}
          />
        ))}
      </View>
      {questions.length === result.length ? (
        <CustomButton
          style={{
            ...styles.button,
            ...continueStyle,
          }}
          ctaButton={() => reset()}
          text="Reset"
        />
      ) : (
        <CustomButton
          style={{
            ...styles.button,
            ...continueStyle,
          }}
          ctaStyle={gbStyles.white}
          ctaButton={() => checkWord()}
          text={selected ? 'Check Answer' : 'Continue'}
        />
      )}

      {checked && (
        <View style={styles.overlay}>
          <Animated.View
            entering={SlideInDown.duration(450)}
            style={{...styles.bottomStyledView, ...sheetColor}}>
            <View style={styles.bottomSheetMsg}>
              <Text style={styles.bottomText}>
                {isCorrect ? 'Great Job!' : `Answer:${data.item.correctWord}`}
              </Text>
            </View>
            <CustomButton
              style={{
                ...styles.button,
                ...styles.background,
              }}
              ctaButton={() => handleScroll()}
              ctaStyle={{...styles.bottomsheetText, ...sheetTextColor}}
              text="Continue"
            />
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default QuestionRow;
