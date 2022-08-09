//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const Feedpost = () => {
  const {userdata} = useSelector(state => state.pageList);
  console.log('userdata454544454', userdata);

  const _renderitem = ({item}) => {
    console.log('items', item);
    <View style={{backgroundColor: 'red'}}>
      <Text>{item?.name}</Text>
    </View>;
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text>Helloooo</Text>
        <FlatList data={userdata} renderItem={_renderitem} />
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
});

export default Feedpost;
