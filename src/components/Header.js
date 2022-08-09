//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import icon from '../helper/Iconconstats';
// create a component
const Header = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Image style={styles.logostyle} source={icon.Logo} />
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.tabimage} source={icon.add} />
          <Image style={styles.tabimage} source={icon.messenger} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  safearea: {
    backgroundColor: 'white',
  },
  logostyle: {
    height: 28,
    width: 100,
    marginTop: 7,
    marginLeft: 10,
  },
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  tabimage: {
    height: 25,
    width: 27,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

//make this component available to the app
export default Header;
