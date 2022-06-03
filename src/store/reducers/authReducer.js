/* eslint-disable no-else-return */
/* eslint-disable default-param-last */

export const SET_AUTH = "SET_AUTH";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";

const initialState = {
  isAuth: false,
  accessToken: '',
  refreshToken:'',
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH: {
      return { ...state, isAuth: payload}
    }
    case SET_ACCESS_TOKEN: {
      return { ...state, accessToken: payload}
    }
    case SET_REFRESH_TOKEN: {
      return { ...state, refreshToken: payload}
    } 
    default: {
      return state;
    }
  }
};

export default authReducer;
