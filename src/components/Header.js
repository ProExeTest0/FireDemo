import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  alert,
} from 'react-native';
import icon from '../helper/Iconconstats';
import ImagePicker from 'react-native-image-crop-picker';
import {useState} from 'react';

import storage from '@react-native-firebase/storage';

const Header = () => {
  const [image, setImage] = useState('');

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 480,
      cropping: true,
    })
      .then(image => {
        const imageUri = image.sourceURL;
        setImage(imageUri);
        uploadImage();
      })
      .catch(e => console.log('eroeeeeeeeeeeee', e));
  };
  const uploadImage = async () => {
    const uploadUri = image;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const extension = fileName.split('.').pop();
    const name = fileName.split('.').slice(0, -1).join('.');
    fileName = name + Date.now() + '.' + extension;
    console.log('filename', fileName);
    const storageRef = storage().ref(`photos/${fileName}`);
    console.log('storageRef', storageRef);
    const task = storageRef.putFile(uploadUri);
    console.log('task', task);
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
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Image style={styles.logostyle} source={icon.Logo} />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            <Image style={styles.tabimage} source={icon.add} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.tabimage} source={icon.messenger} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={uploadImage}>
          <Text>upload image</Text>
        </TouchableOpacity> */}
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
