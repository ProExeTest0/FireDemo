//import liraries
import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {getAPIData} from '../../global/Globalapi';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const {arr} = useSelector(state => state.pageList);
  console.log('this test', arr);
  const getData = () => {
    const request = {
      onSuccsess: response => console.log('response at home ', response),
      onFail: err => console.log('err at home', err),
    };

    dispatch(getAPIData(request));
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.body}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={arr} renderItem={_renderItem} />
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
export default Home;
