import { 
  TOGGLE_SHOWING,
  SET_OPENED_PLACE,
  GET_OPENED_PLACE,
  SET_OPENED_MAP_PLACES,
  UPDATE_OPENED_MAP_PLACES,
  SET_POSITION,
  SET_ZOOM,
  GET_MAP,
  SET_MAP } from '../actions/types';

const initialState = {
  isShowing: 'none',
  openedPlace: {},
  // For initial map position
  sfPosition : {
    lat: undefined,
    lng: undefined
  },
  zoom: undefined,
  map: undefined,
  places: []
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case TOGGLE_SHOWING:
      return {
        ...state,
        isShowing: action.payload
      }
    
    case SET_OPENED_PLACE:
      return {
        ...state,
        openedPlace: action.payload
      }

    case GET_OPENED_PLACE:
      return {
        ...state,
        openedPlace: action.payload
      }
    
    case SET_OPENED_MAP_PLACES: {
      return {
        ...state,
        places: action.payload
      }
    }

    case UPDATE_OPENED_MAP_PLACES: {
      return {
        ...state,
        places: state.places.push(action.payload)
      }
    }
    
    case SET_POSITION:
      return {
        ...state,
        sfPosition: action.payload
      }

    case SET_ZOOM:
      return{
        ...state,
        zoom: action.payload
      }
      
    case GET_MAP:
      return {
        ...state,
        map: action.payload
      }
    
    case SET_MAP: {
      return {
        ...state,
        map: action.payload
      }
    }
    default: 
      return state;
  }
}