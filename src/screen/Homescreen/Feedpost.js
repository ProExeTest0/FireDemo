import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Header from '../../components/Header';

const Feedpost = () => {
  // const users = await firestore().collection('Users').get();
  // const user = await firestore().collection('Users').doc('ABC').get();

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text>Helloooo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Feedpost;
