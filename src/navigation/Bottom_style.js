//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icon from '../helper/Iconconstats';

// create a component
const Tabstyle = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Image style={styles.tabimage} source={icon.homeicon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ReelsInsearch')}>
        <Image style={styles.tabimage} source={icon.search} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ReelsOnBottom')}>
        <Image style={styles.tabimage} source={icon.reels} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationOnheart')}>
        <Image style={styles.tabimage} source={icon.heart} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileOnBottom')}>
        <Image style={styles.tabimage} source={icon.user} />
      </TouchableOpacity>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 5,
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabimage: {
    height: 25,
    width: 27,
    marginBottom: 10,
  },
});

//make this component available to the app
export default Tabstyle;
