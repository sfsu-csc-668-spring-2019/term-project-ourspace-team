import { 
  TOGGLE_SHOWING, 
  SET_OPENED_PLACE, 
  GET_OPENED_PLACE, 
  SET_POSITION, 
  SET_ZOOM, 
  GET_MAP, 
  SET_MAP } from './types';
import { store } from '../config/store';
import * as MapFunction from '../components/Map_Components/functions/index';

export const toggleShowing = ( updateShowing ) => dispatch => {
  dispatch({
    type: TOGGLE_SHOWING,
    payload: updateShowing
  });
}

export const setPosition = (position) => dispatch => {
  dispatch({
    type: SET_POSITION,
    payload: position
  })
}

export const setZoom = (zoom) => dispatch => {
  dispatch({
    type: SET_ZOOM,
    payload: zoom
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

export const setMap = (map) => dispatch =>{
  dispatch({
    type: SET_MAP,
    payload: map
  });
}

export const getMap = () => dispatch => {
  dispatch({
    type: GET_MAP,
    payload: store.getState().map
  });
}