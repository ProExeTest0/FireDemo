//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Btn from '../components/Btn';
import Textinputevent from '../components/TextInput';
import {SignUPText} from '../helper/String';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {USERDATA} from '../action/Useraction';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {emailValidator} from '../helper/emailvalidator';
import {passwordValidator} from '../helper/passwordvalidate';

const Signup = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [name, setUsername] = useState('');
  const [email, setUseremail] = useState('');
  const [phone, setUserphone] = useState('');
  const [password, setUserpassword] = useState('');
  const [id, setId] = useState(0);

  const list = {
    id: id,
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  const Onsubmit = () => {
    setId(id + 1);
    dispatch(USERDATA(list));

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        navigate('feed');
        console.log('User account created & signed in!', response);
      })
      .catch(error => {
        if (passwordValidator(password)) {
          alert('password');
        } else if ((email, name, phone, password == 0)) {
          alert('please enter data');
          console.log('please enter data', error);
        } else if (emailValidator(email)) {
          alert('valid email');
        } else alert('That email address is already in use!');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'black'}}>{SignUPText}</Text>
      <Textinputevent place={'Name'} onChangeText={text => setUsername(text)} />
      <Textinputevent
        value={email}
        onChangeText={text => setUseremail(text)}
        place={'Email'}
      />
      <Textinputevent
        value={phone}
        place={'phone'}
        onChangeText={text => setUserphone(text)}
      />
      <Textinputevent
        value={password}
        place={'password'}
        onChangeText={text => setUserpassword(text)}
      />
      <Btn
        text={'Sign Up'}
        onpress={'feed'}
        data={name}
        Reducer_data={list}
        onPress={Onsubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Signup;
