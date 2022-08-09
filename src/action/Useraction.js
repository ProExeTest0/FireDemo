import {USER} from './Type';

export const USERDATA = data => {
  console.log('data::', data);
  return dispatch => {
    dispatch({type: USER, payload: data});
  };
};
