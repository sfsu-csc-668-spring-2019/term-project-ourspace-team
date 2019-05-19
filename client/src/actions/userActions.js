import { 
  GET_USER_MAP_IDS,
  SET_USER_DATA, 
  CLEAR_USER_DATA } from './types';

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

export const getUserMapIds = () => dispatch => {
  fetch(`/getUserMaps`, {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((result) => {
    let payload = [];
    for( let index = 0 ; index < result.length; index++) {
      payload.push(result[index].id);
    }

    dispatch({
      type: GET_USER_MAP_IDS,
      payload: payload
    });
  });
} 