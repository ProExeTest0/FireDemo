import React, {useEffect, useState} from 'react';
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
import storage from '@react-native-firebase/storage';
const ProfileView = () => {
  const [image, setImage] = useState('');

  // const {signup, imageuplaod} = useSelector(state => state?.pageList);

  // const dispatch = useDispatch();
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
        // dispatch({type: SIGNUP, payload: respo});
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
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 480,
      cropping: true,
    })
      .then(image => {
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
        uploadImage();
      })
      .catch(e => console.log(e));
  };
  const uploadImage = async () => {
    const uploadUri = image;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const extension = fileName.split('.').pop();
    const name = fileName.split('.').slice(0, -1).join('.');
    fileName = name + Date.now() + '.' + extension;
    const storageRef = storage().ref(`photos/${fileName}`);
    const task = storageRef.putFile(uploadUri);
    task.on('state_changed', taskSnapshot => {});
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      console.log('url ', url);
      return url;
    } catch (e) {
      alert('Image is not Successfully Uploaded');
      console.log(e);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <ProfileImagesetter />
      <Text>{auth().currentUser.email}</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={handleChoosePhoto}
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
