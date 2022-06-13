/* eslint-disable no-else-return */
/* eslint-disable default-param-last */

export const SET_USER = "SET_USER";
export const SET_AUTH = "SET_AUTH";
export const SET_LOADING = "SET_LOADING";

const initialState = {
    user : {},
    isAuth : false,
    isLoading : false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      return { ...state, user: payload}
    }
    case SET_AUTH: {
      return { ...state, isAuth: payload}
    }
    case SET_LOADING: {
      return { ...state, isLoading: payload}
    } 
    default: {
      return state;
    }
  }
};

export default authReducer;
