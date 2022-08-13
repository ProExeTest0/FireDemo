//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textinputevent from '../components/TextInput';
import Btn from '../components/Btn';
import {UPDATE_PROFILE} from '../helper/String';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Upload_details = () => {
  const [updatename, setUpdatename] = useState();
  const [updatelastname, setupdateLastname] = useState();
  const Updatedetail = () => {
    firestore()
      .collection('Userdetail')
      .doc(auth().currentUser.uid)
      .update({
        FirstName: updatename,
        LastName: updatelastname,
      })
      .then(() => {
        alert('You have Data Successfully Add');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'black'}}>{UPDATE_PROFILE}</Text>
      <Textinputevent
        place={'First Name'}
        onChangeText={text => setUpdatename(text)}
      />
      <Textinputevent
        place={'Last Name'}
        onChangeText={text => setupdateLastname(text)}
      />
      <View style={{flexDirection: 'row', marginTop: 5}}></View>
      <Btn text={'Update'} onPress={Updatedetail} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Upload_details;
