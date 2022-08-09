import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './src/reducer/store/Store';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Stacknav';

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
