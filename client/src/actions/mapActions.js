import {
  GET_COMMENTS,
  TOGGLE_SHOWING, 
  SET_OPENED_PLACE, 
  GET_OPENED_PLACE, 
  SET_OPENED_MAP_PLACES,
  SET_POSITION, 
  SET_ZOOM, 
  GET_MAP, 
  SET_MAP } from './types';
import { store } from '../config/store';

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

export const getOpenedMapPlaces = ( mapId ) => dispatch => {
  fetch(`/getPlacesFromMap`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mapId: mapId
    })

  }).then((response) => response.json())
    .then((result) => {
    
    dispatch({
      type: SET_OPENED_MAP_PLACES,
      payload: result
    });

  });
}

export const getComments = ( place_id ) => dispatch => {
  fetch('/getComments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      place_id: place_id
    })
  }).then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_COMMENTS,
        payload: result
      });
    });
}

export const addPlaceToMap = ( mapId, place ) =>{
  fetch('/addPlaceToMap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: mapId,
      place: place
    })
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