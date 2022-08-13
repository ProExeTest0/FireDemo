import {IMAGE_UPLOAD} from './Type';

export const Image_Uplaod = uplaod => {
  console.log('signup::', uplaod);
  return dispatch => {
    dispatch({type: IMAGE_UPLOAD, payload: uplaod});
  };
};
