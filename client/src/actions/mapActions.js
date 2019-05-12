import { TOGGLE_SHOWING, SET_OPENED_PLACE, GET_OPENED_PLACE } from './types';
import store from '../config/store';

export const toggleShowing = ( updateShowing ) => dispatch => {
  dispatch({
    type: TOGGLE_SHOWING,
    payload: updateShowing
  });
}

export const setOpenedPlace = ( place ) => dispatch => {
  dispatch({
    type: SET_OPENED_PLACE,
    payload: place
  });
}

export const getOpenedPlace = () => dispatch => {
  dispatch({
    type: GET_OPENED_PLACE,
    payload: store.getState().openedPlace
  });
}