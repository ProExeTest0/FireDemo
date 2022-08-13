import * as React from 'react';
import Login from '../auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from '../auth/Sign';

import Drawernav from './Drawernav';
import Upload_details from '../auth/Uplaoddata';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Login}
        options={{headerShown: false}}
        // gestureEnabled:false
      />
      <Stack.Screen
        name="drawer"
        component={Drawernav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="upload_data"
        component={Upload_details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
