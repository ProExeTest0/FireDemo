import {GET_PAGE_LIST} from './Type';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {GET_API_DATA} from './Type';

export const Listaction = data => {
  console.log('data::', data);
  return dispatch => {
    dispatch({
      type: GET_PAGE_LIST,
      payload: data,
    });
  };
};
export const ApiData = data => {
  console.log('storedata::', storedata);
  return dispatch => {
    dispatch({
      type: GET_API_DATA,
      payload: data,
    });
  };
};
