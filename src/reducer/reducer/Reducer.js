import {GET_API_DATA, GET_PAGE_LIST, USER} from '../../action/Type';
import {useEffect} from 'react';
const INITIAL_STATE = {
  data: [0],
  arr: [],
  userdata: [],
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

    default:
      return state;
  }
};
export default pageListReducer;

// let itemExists = false;
// const newState = state.map(item => {
//   const newItem = {...item};
//   if (newItem.item.uid === payload.item.uid) {
//     itemExists = true;
//     newItem.item.qty = item.qty + 1;
//   }
//   return newItem;
// });

// if (!itemExists) newState.push(payload);
