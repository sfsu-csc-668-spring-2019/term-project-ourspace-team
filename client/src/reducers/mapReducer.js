import { TOGGLE_SHOWING, SET_OPENED_PLACE, GET_OPENED_PLACE } from '../actions/types';

const initialState = {
  isShowing: 'none',
  openedPlace: {}
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
    default: 
      return state;
  }
}