/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useTheme} from 'react-native-paper';
import Routes from './src/navigation';

function App(): JSX.Element {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  return <Routes />;
}

export default App;
