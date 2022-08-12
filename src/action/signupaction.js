import {SIGNUP} from './Type';

export const Signup_action = signup => {
  console.log('signup::', signup);
  return dispatch => {
    dispatch({type: SIGNUP, payload: signup});
  };
};
