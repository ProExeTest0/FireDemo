//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import icon from '../helper/Iconconstats';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: 1,
    title: 'First Item',
    islike: false,
    image: icon._demoimage1,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'Second Item',
    islike: false,
    image: icon._demoimage2,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    title: 'Third Item',
    islike: false,
    image: icon._demoimage3,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    title: 'Third Item',
    islike: false,
    image: icon._demoimage4,
    dis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const ImageFeed = () => {
  const [data, setData] = useState(DATA);

  const onLikeButtonPress = item => {
    const result = data?.map(i => {
      if (i.id === item?.id) {
        return {...i, islike: !i?.islike};
      } else {
        return i;
      }
    });
    console.log('Result : ', result);
    setData(result);
  };

  const RenderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Image style={styles.tabimage} source={item.image} />
        <TouchableOpacity onPress={() => onLikeButtonPress(item)}>
          <Image
            style={styles.likebtn}
            source={item.islike ? icon.red_heart : icon.heart}
            // source={!item.islike == 'true' ? icon.heart : icon.red_heart}
          />
        </TouchableOpacity>
        <Text>{item.dis}</Text>
      </View>
    );
  };

  const renderFooter = () => <View style={{padding: 70}} />;

  const getimage = () => {};
  useEffect(() => {
    getimage();
  }, []);

  const dispatch = useDispatch();
  const {userdata} = useSelector(state => state.pageList);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={RenderItem}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

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
    height: 24,
    width: 27,
  },
});

//make this component available to the app
export default ImageFeed;
