import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileImagesetter from '../../components/profileImagesetter';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';
import {SIGNUP} from '../../action/Type';
import {useDispatch} from 'react-redux';

const ProfileView = () => {
  const {signup} = useSelector(state => state?.pageList);
  console.log('signup data ----', signup);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState();
  const getUserData = () => {
    firestore()
      .collection('Userdetail')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
        let respo = documentSnapshot.data();
        setTemp(respo);
        dispatch({type: SIGNUP, payload: respo});
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log('signup data is hera', signup);
  const [image, setImage] = useState();
  console.log('imagessssss', image);
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

  const {navigate} = useNavigation();
  const onAddImage = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 200,
      cropping: true,
      compressImageQuality: 0,
    }).then(image => {
      setImage(image.sourceURL);
    });
  };
  console.log('temp', temp);
  return (
    <View style={styles.container}>
      <ProfileImagesetter />
      <Text>{auth().currentUser.email}</Text>
      <TouchableOpacity onPress={onAddImage}>
        <Text style={styles.header_text}>ADD Image </Text>
      </TouchableOpacity>
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
