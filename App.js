import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './src/reducer/store/Store';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Stacknav';
import firestore from '@react-native-firebase/firestore';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
