//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
const ProfileImagesetter = () => {
  const {imageuplaod} = useSelector(state => state?.pageList);
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        {/* <Image
          style={styles.tabimage}
          source={{
            uri: imageuplaod,
          }}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 220,
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

export default ProfileImagesetter;
