//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Textinputevent = ({place, onChangeText, value, onFocus}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={place}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        onFocus={onFocus}
        value={value}
        style={{
          height: 48,
          width: 350,
          backgroundColor: '#DEE9EC',
          borderRadius: 5,
          margin: 11,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Textinputevent;
