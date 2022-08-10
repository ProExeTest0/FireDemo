import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ReelsOnBottom, ProfileOnBottom} from '../screen/Index';
import Tabnav from './Tabnav';

import {TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Login from '../auth/Login';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Great = () => {
  return <Tabnav />;
};
const Logout = () => {
  const {navigate} = useNavigation();
  <TouchableOpacity
    style={{height: 50, width: 50, backgroundColor: 'red'}}
    onPress={() => navigate('Home')}></TouchableOpacity>;
  // firebase
  //   .auth()
  //   .signOut()
  //   .then(async () => {
  //     await AsyncStorage.clear();
  //     console.log('logout done');
  //     navigate('Home');
  //     alert('Logout Succesfully');
  //   })
  //   .catch(e => console.log(e));
};

// const Logout = () => {
//   const {navigate} = useNavigation();
//   <TouchableOpacity
//     style={{height: 50, width: 50, backgroundColor: 'red'}}
//     onPress={() => navigate('Home')}></TouchableOpacity>;

// };
const great = () => {
  <TouchableOpacity
    style={{height: 50, width: 50, backgroundColor: 'red'}}
    onPress={() => navigate('Home')}></TouchableOpacity>;
};
// const Logout = () => {
//   const {navigate} = useNavigation();
//   <TouchableOpacity
//     style={{height: 50, width: 50, backgroundColor: 'red'}}

// };
const Drawernav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Great" component={Great} />
      <Drawer.Screen name="reels" component={ReelsOnBottom} />
      <Drawer.Screen name="profile" component={ProfileOnBottom} />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Drawernav;
