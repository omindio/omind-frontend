import {
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_DELETE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  id: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        id: action.id,
      });
    case PRODUCT_DELETE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case PRODUCT_DELETE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PRODUCT_DELETE_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        id: null,
      });
    default:
      return state;
  }
}
