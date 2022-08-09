import * as React from 'react';
import Login from '../auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from '@react-native-firebase/auth';

import Tabnav from './Tabnav';
import Signup from '../auth/Sign';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Login}
        options={{headerShown: false}}
        // gestureEnabled:false
      />
      <Stack.Screen
        name="feed"
        component={Tabnav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
