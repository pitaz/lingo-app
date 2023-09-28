import * as React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Questions from '../screens/Questions';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = StackNavigationProp<RootStackParamList>;
type NavigationRouteProp = RouteProp<RootStackParamList, 'home-screen'>;

export type TNavigationProps = {
  navigation: NavigationProp;
  route: NavigationRouteProp | any;
};
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="home-screen"
          component={HomeScreen}
          options={{presentation: 'transparentModal', animation: 'fade'}}
        />
        <Stack.Screen name="questions" component={Questions} />
        <Stack.Screen name="result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
