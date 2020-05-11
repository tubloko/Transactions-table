import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_LOADING,
} from "../constants/actionTypes";

const initialState = {
  name: '',
  isLoading: false,
  error: false
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_LOADING:
      return { ...state, isLoading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, name: payload.name };

    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: true };

    default:
      return state;
  }
};

export default loginReducer;