import {combineReducers} from 'redux';
import {UserReducer, ContactsReducer} from '../features/index';
const Reducers = combineReducers({
  UserReducer,
  ContactsReducer,
});

export default Reducers;
