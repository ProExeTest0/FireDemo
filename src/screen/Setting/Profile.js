import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileImagesetter from '../../components/profileImagesetter';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileView = () => {
  const onLogoutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await AsyncStorage.clear();
        console.log('logout done');
        alert('Logout Succesfully');
        navigate('Home');
      })
      .catch(e => console.log(e));
  };
  const getData = () => {
    const uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <ProfileImagesetter />

      <Text>{auth().currentUser.email}</Text>

      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 15}}
        onPress={onLogoutPress}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
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
