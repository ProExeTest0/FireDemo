import {GET_API_DATA, GET_PAGE_LIST, USER, SIGNUP} from '../../action/Type';
const INITIAL_STATE = {
  data: [0],
  arr: [],
  userdata: [],
  signup: [],
};
const pageListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PAGE_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case GET_API_DATA:
      return {
        ...state,
        arr: action.payload,
      };
    case USER:
      return {
        ...state,
        userdata: [...state.userdata, action.payload],
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

// const Firebaseactions = () => {
//   const {signup} = useSelector(state => state?.pageList);
//   console.log('fname----------', signup);
//   auth()
//     .createUserWithEmailAndPassword('tuv@gmail.com', '123456')
//     .then(response => {
//       //  navigate('feed'); // navigation for next page.
//       console.log('User account created & signed in!', response);
//     })
//     .catch(error => {
//       console.log('That email address is already in use!', error);
//     });
// };

export default pageListReducer;
