import { TOGGLE_SHOWING, SET_OPENED_PLACE, GET_OPENED_PLACE, GET_MAP } from './types';
import  { store } from '../config/store';
import * as MapFunction from '../components/Map_Components/functions/index';

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

/*
// Re-render same map
export const getMap = () => dispatch => {
  console.log("Trying to create map")
  const map = MapFunction.createNewMap( store.getState().sfPosition, store.getState().zoom );
  var infoWindow = new window.google.maps.InfoWindow(); 
  dispatch({
    type: GET_MAP,
    payload: {map, infoWindow}
  });
}
*/