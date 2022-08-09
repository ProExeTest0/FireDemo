import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Imagesetter from '../../components/Imagesetter';
const ProfileView = () => {
  return (
    <View style={styles.container}>
      <Imagesetter />
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

export default ProfileView;
