//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import icon from '../helper/Iconconstats';

const Imagesetter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.tabimage} source={icon.profile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 250,
  },
  imagecontainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  tabimage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});

export default Imagesetter;
