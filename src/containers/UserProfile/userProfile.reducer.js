import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './userProfile.types';

const initialState = {
  isFetching: false,
  error: null,
  user: undefined,
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
    case UPDATE_PROFILE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        user: action.values,
      });
    case UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        user: action.response,
      });
    case UPDATE_PROFILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
