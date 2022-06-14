/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from "axios";
import AuthService from "../../axios";
import { API_URL } from "../../api";
import {
  SET_AUTH,
  SET_USER,
  SET_LOADING,
  SET_ERROR
} from "../reducers/authReducer";


export const setAuth = (isAuth) =>({
  type:SET_AUTH,
  payload: isAuth,
})

export const setUser = (user) =>( {
  type:SET_USER,
  payload: user,
})

export const setLoading = (isLoading) =>({
  type:SET_LOADING,
  payload: isLoading,
})

export const setError= (error) =>({
  type:SET_ERROR,
  payload: error,
})

export const login = (email,password)=> async (dispatch) =>{
  dispatch(setLoading(true));
  try {
    dispatch(setError(false))
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
  } catch (e) {
    dispatch(setError(e.response?.data?.message))
  } finally {
    dispatch(setLoading(false));
  }
}

export const logout = ()=> async(dispatch)=> {
  dispatch(setLoading(true));
  try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setUser({}));
  } catch (e) {
      console.log(e.response?.data?.message);
  }
  finally {
    dispatch(setLoading(false));
  }
}

export const checkAuth = ()=> async(dispatch)=> {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e) {
        console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
}