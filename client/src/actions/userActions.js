import { SET_USER_DATA, CLEAR_USER_DATA } from './types';
// import store from '../config/store';

export const saveUserData = ( userData ) => dispatch => {
  dispatch({
    type: SET_USER_DATA,
    payload: userData
  });
}

export const clearUserData = () => dispatch => {
  dispatch({
    type: CLEAR_USER_DATA,
    payload: { undefined: undefined, empty: ''}
  });
}