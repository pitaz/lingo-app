import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../../styles/globalStyles';
import CustomButton from '../../components/Button';
import {TNavigationProps} from '../../navigation';

const Home: React.FC<TNavigationProps> = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('questions');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.styledView}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>
          You will be presented with 5 translations
        </Text>
        <Text style={styles.text}>Can you score 100%?</Text>
        <CustomButton
          ctaButton={navigate}
          text="Begin"
          style={styles.button}
          ctaStyle={styles.white}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
