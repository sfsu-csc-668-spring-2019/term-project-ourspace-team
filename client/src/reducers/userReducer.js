import { SET_USER_DATA, CLEAR_USER_DATA, GET_USER_MAP_IDS } from '../actions/types';

const initialState = {
  id: undefined,
  name: '',
  username: '',
  email: '',
  mapIds: [],
  openedMapId: undefined
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        mapIds: action.payload.mapIds,
        openedMapId: action.payload.openedMapId
      }

    case CLEAR_USER_DATA:
      return {
        ...state,
        id: action.payload.undefined,
        name: action.payload.empty,
        username: action.payload.empty,
        email: action.payload.empty,
        mapIds: action.payload.undefined,
        openedMapId: action.payload.undefined
      }
    
    case GET_USER_MAP_IDS:
      return {
        ...state,
        madIds: action.payload,
        openedMapId: action.payload[0]
      }

    default: 
      return state;
  }
}