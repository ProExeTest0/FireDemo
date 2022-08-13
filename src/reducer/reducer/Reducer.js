import {SIGNUP, IMAGE_UPLOAD} from '../../action/Type';
const INITIAL_STATE = {
  signup: [],
  imageuplaod: ' ',
};
const pageListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD:
      return {
        ...state,
        imageuplaod: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        signup: [...state.signup, action.payload],
      };

    default:
      return state;
  }
};

export default pageListReducer;
