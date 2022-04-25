/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native'


import MainNavigation from './src/Navigation/MainNavigation';
import store from './src/store/store';


function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <>
      <Provider store={store}>
        <StatusBar hidden={true} />
       <NavigationContainer>
         <MainNavigation/>
       </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
