import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../../styles/globalStyles';
import CustomButton from '../../components/Button';

const Result: React.FC<any> = ({navigation, route}) => {
  const navigate = () => {
    navigation.navigate('home-screen');
  };
  const total = route?.params?.result.length;
  const passed = route?.params?.result?.filter(
    (i: any) => i.isCorrect === true
  ).length;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.styledView}>
        <Text style={styles.text}>Result</Text>
        <Text style={styles.text}>
          You got {passed} out of {total}
        </Text>
        <CustomButton
          ctaButton={navigate}
          text="Try Again!"
          style={styles.button}
          ctaStyle={styles.white}
        />
      </View>
    </SafeAreaView>
  );
};

export default Result;
