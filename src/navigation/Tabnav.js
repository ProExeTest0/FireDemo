import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Feed,
  NotificationOnheart,
  ProfileOnBottom,
  ReelsInsearch,
  ReelsOnBottom,
} from '../screen/Index';
import Tabstyle from './Bottom_style';

const Tab = createBottomTabNavigator();

const Tabnav = () => {
  return (
    <Tab.Navigator
      // initialRouteName="login"
      tabBar={props => <Tabstyle {...props} />}>
      <Tab.Screen name="Feed" component={Feed} options={{headerShown: false}} />
      <Tab.Screen
        name="NotificationOnheart"
        component={NotificationOnheart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ReelsOnBottom"
        component={ReelsOnBottom}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileOnBottom"
        component={ProfileOnBottom}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ReelsInsearch"
        component={ReelsInsearch}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabnav;
