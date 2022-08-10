import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icon from '../helper/Iconconstats';
import Textinputevent from '../components/TextInput';
import Btn from '../components/Btn';
import {Or} from '../helper/String';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();
  const Success_loin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async response => {
        const uid = auth().currentUser.uid;
        console.log('login::', uid);
        navigate('drawer');
        await AsyncStorage.setItem('UID', uid);

        console.log('idddd ', id);

        // navigate('drawer');
        console.log('login sucess', response);
      })
      .catch(error => {
        alert('please enter valid email or password');
        console.log('enter valid', error);
      });
  };

  const getValueStore = async () => {
    const value = await AsyncStorage.getItem('UID');

    value && navigate('drawer');
  };
  const getValue = () => {
    const currentUserId = auth().currentUser;
    //console.log('current User Id ', currentUserId);
    if (currentUserId !== null) {
      navigate('drawer');
    }
  };

  useEffect(() => {
    getValue();
    // getValueStore();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.tabimage} source={icon.loginlogo} />
      <View style={{bottom: 70}}>
        <Textinputevent
          place={'email'}
          onChangeText={text => setEmail(text.toLowerCase())}
        />
        <Textinputevent
          place={'passwod'}
          onChangeText={text => setPassword(text)}
        />
        <Btn text={'LOGIN'} onPress={Success_loin} />
        <View>
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10,
            }}></View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.textstl}>{Or}</Text>
            <TouchableOpacity onPress={() => navigate('signup')}>
              <Text style={{color: 'blue'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabimage: {
    height: 50,
    width: 200,
    bottom: 100,
    marginTop: 150,
  },
  textstl: {
    textAlign: 'center',
  },
});

//make this component available to the app
export default Login;
