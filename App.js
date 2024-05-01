/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomTabbar from './src/naviagtion/CustomTabbar';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        {flex: 1, backgroundColor: 'rgba(243, 112, 33, 1)'},
      ]}
      forceInset={{bottom: 'always', top: 'never'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <CustomTabbar />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
