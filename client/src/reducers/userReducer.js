import { SET_USER_DATA, CLEAR_USER_DATA } from '../actions/types';

const initialState = {
  id: undefined,
  name: '',
  username: '',
  email: ''
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email
      }

    case CLEAR_USER_DATA:
      return {
        ...state,
        id: action.payload.undefined,
        name: action.payload.empty,
        username: action.payload.empty,
        email: action.payload.empty
      }
      
    default: 
      return state;
  }
}