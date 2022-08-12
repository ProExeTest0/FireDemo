//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Btn from '../components/Btn';
import Textinputevent from '../components/TextInput';
import {SignUPText} from '../helper/String';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {SIGNUP} from '../action/Type';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Checkbox from '../helper/chechbox';

const Signup_page = () => {
  const {signup} = useSelector(state => state?.pageList);
  const dispatch = useDispatch();
  console.log('signupe user , ::', signup);
  const {navigate} = useNavigation();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setUseremail] = useState('');
  const [phone, setUserphone] = useState('');
  const [password, setUserpassword] = useState('');
  const [cpassword, setCuserpassword] = useState('');
  const [date, setDate] = useState(new Date());
  console.log('date', date);
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const list = {
    fname,
    lname,
    email,
    phone,
    password,
    cpassword,
    gender,
    date,
  };
  console.log('liust', list);
  const Onsubmit = () => {
    dispatch({type: SIGNUP, payload: list});
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = auth().currentUser.uid;
        console.log('sign_ID::', uid);
        firestore()
          .collection('Userdetail')
          .doc(uid)
          .set({
            DOB: date,
            Email: email,
            Firstname: fname,
            Gender: gender,
            Lastname: lname,
            Password: password,
          })
          .then(res => {
            navigate('drawer');
            console.log('res from firebase', res);
          })
          .catch(err => console.log(err));
        console.log('User account created & signed in!', response);
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: 'black'}}>{SignUPText}</Text>
        <Textinputevent
          place={'First Name'}
          onChangeText={text => setFname(text)}
        />
        <Textinputevent
          place={'Last Name'}
          onChangeText={text => setLname(text)}
        />
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
        <Text style={{margin: 5, fontSize: 20}}>Select Gender:</Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Checkbox
            label={'Male'}
            onChange={() => setGender('male')}
            checked={gender == 'male'}
          />
          <Checkbox
            label={'Female'}
            onChange={() => setGender('female')}
            checked={gender == 'female'}
          />
          <Checkbox
            label={'Other'}
            onChange={() => setGender('other')}
            checked={gender == 'other'}
          />
        </View>
        <Textinputevent
          place={date}
          onFocus={() => setOpen(true)}
          value={date}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          format="YYYY-MM-DD"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <Textinputevent
          value={password}
          place={'password'}
          onChangeText={text => setUserpassword(text)}
        />
        <Textinputevent
          value={cpassword}
          place={'Confirm password'}
          onChangeText={text => setCuserpassword(text)}
        />
        <Btn text={'Sign Up'} onpress={'feed'} onPress={Onsubmit} />
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Signup_page;
