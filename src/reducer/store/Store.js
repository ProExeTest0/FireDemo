import {createStore, combineReducers} from 'redux';
import pageListReducer from '../reducer/Reducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({pageList: pageListReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
