import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import userReducer from './userReducer'
// Import Reducers Here

export default combineReducers({
  // Name of Reducer to be Exported : Name of Reducer Imported
  maps: mapReducer,
  user: userReducer
});