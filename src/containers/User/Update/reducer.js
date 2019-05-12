import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
} from './types';

const initialState = {
  isFetching: false,
  error: {},
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        user: action.values,
      });
    case LOAD_DATA_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        user: action.response,
      });
    case LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    case USER_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        user: action.values,
      });
    case USER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        user: action.response,
      });
    case USER_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
