import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ProfileImagesetter from '../../components/profileImagesetter';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import {SIGNUP} from '../../action/Type';
import {useDispatch} from 'react-redux';
import {Image_Uplaod} from '../../action/ImageUpload';
import Upload_details from '../../auth/Uplaoddata';

const ProfileView = () => {
  const {signup, imageuplaod} = useSelector(state => state?.pageList);
  const dispatch = useDispatch();
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
        dispatch({type: SIGNUP, payload: respo});
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserData();
  }, []);

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
  const onAddImage = async () => {
    ImagePicker.openPicker({
      width: 100,
      height: 200,
      cropping: true,
      compressImageQuality: 0,
    }).then(image => {
      dispatch(Image_Uplaod(image.sourceURL));
    });
  };

  return (
    <View style={styles.container}>
      <ProfileImagesetter />
      <Text>{auth().currentUser.email}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={onAddImage}
          style={{backgroundColor: 'black', padding: 15}}>
          <Text style={{color: 'white'}}>upload Image </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'black', padding: 15}}
          onPress={onLogoutPress}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'black', padding: 15}}
          onPress={() => navigate('upload_data')}>
          <Text style={{color: 'white'}}>Update</Text>
        </TouchableOpacity>
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
  tinyLogo: {
    height: 50,
    width: 50,
  },
});

export default ProfileView;
