//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Listaction} from '../action/Listaction';
import {useSelector} from 'react-redux';
import {USERDATA} from '../action/Useraction';
// create a component

const Btn = ({text, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={['#A136BD', '#FF387D', '#FF5D34', '#FFAA1B']}
          start={{x: 1, y: 1}}
          end={{x: 0.1, y: 0.1}}
          style={styles.container}>
          <Text style={styles.textstyle}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 350,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Btn;
