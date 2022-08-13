//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import icon from '../helper/Iconconstats';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: icon._demoimage1,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: icon._demoimage2,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: icon._demoimage3,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: icon._demoimage4,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const RenderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Image style={styles.tabimage} source={item.image} />
      {/* <Image
        style={styles.stretch}
        source={{uri: 'gs://mezuniyet2r.appspot.com/images/erkek.jpg'}}
      /> */}
      <Image style={styles.likebtn} source={icon.heart} />
      <Text>{item.dis}</Text>
    </View>
  );
};

const ImageFeed = () => {
  const getimage = () => {};

  useEffect(() => {
    getimage();
  }, []);

  const dispatch = useDispatch();
  const {userdata} = useSelector(state => state.pageList);
  console.log('arr123456', userdata);
  return (
    <View>
      <FlatList data={DATA} renderItem={RenderItem} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 10,
  },
  tabimage: {
    height: 200,
    width: '100%',
  },
  likebtn: {
    height: 20,
    width: 20,
  },
});

//make this component available to the app
export default ImageFeed;
