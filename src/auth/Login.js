import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icon from '../helper/Iconconstats';
import Textinputevent from '../components/TextInput';
import Btn from '../components/Btn';
import {Dont_have_an_Account} from '../helper/String';
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
        await AsyncStorage.setItem('UID', uid);
        console.log('uid', uid);
        navigate('drawer');
      })
      .catch(error => {
        alert('please enter valid email or password');
        console.log('enter valid', error);
      });
  };
  const getValue = () => {
    const currentUserId = auth().currentUser;
    if (currentUserId !== null) {
      navigate('drawer');
    }
  };
  useEffect(() => {
    getValue();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.tabimage} source={icon.loginlogo} />
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.textstl}>{Dont_have_an_Account}</Text>
          <TouchableOpacity onPress={() => navigate('signup')}>
            <Text style={{color: 'blue'}}>Sign Up</Text>
          </TouchableOpacity>
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
    bottom: 50,
  },
  tabimage: {
    height: 50,
    width: 200,
    bottom: 50,
    marginTop: 150,
  },
  textstl: {
    textAlign: 'center',
  },
});

//make this component available to the app
export default Login;
