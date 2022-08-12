import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-checkbox';

const Checkbox = ({label, onChange, checked}) => {
  return (
    <View style={styles.container}>
      <CheckBox label={null} checked={checked} onChange={onChange} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Checkbox;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginHorizontal: 19,
    fontSize: 15,
    color: 'black',
  },
});
