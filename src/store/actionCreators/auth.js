/* eslint-disable no-unused-vars */
import axios from "axios";
import AuthService from "../../axios";
import { API_URL } from "../../api";
import {
  SET_AUTH,
  SET_USER,
  SET_LOADING,
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
export const login = (email,password)=> async (dispatch) =>{
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
}
export const logout = ()=> async(dispatch)=> {
  try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setUser({}));
  } catch (e) {
      console.log(e.response?.data?.message);
  }
}

export const checkAuth = ()=> async(dispatch)=> {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e) {
        console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
}


// export const setIsLoadingCards = (isLoading) => ({
//   type: SET_IS_LOADING_CARDS,
//   payload: isLoading,
// });

// export const initCardItemsCreator = () => async (dispatch) => {
//   dispatch(setIsLoadingCards(true));
//   try {
//     const { data } = await getProducts();
//     dispatch({ type: GET_ITEMS, payload: data });
//     dispatch(setIsLoadingCards(false));
//   } catch (e) {
//     dispatch(setIsLoadingCards(false));
//     Notiflix.Notify.failure("Unable to load dishes. Server error.");
//   }
// };

// export const initCategories = (categories) => ({
//   type: SET_CATEGORIES,
//   payload: categories,
// });

// export const resetCategories = ()=> ({type: RESER_CATEGORIES, payload: []})

// export const initСategoriesItemsCreator = (inquiry) => async (dispatch) => {
//   const allCategories = {};
//   const {
//     data: { products },
//   } = await getByCategory(inquiry);
//   products.forEach((item) => {
//     if (!(`${item.categories}` in allCategories)) {
//       allCategories[item.categories] = [item];
//     } else {
//       allCategories[item.categories] = [
//         ...allCategories[item.categories],
//         item,
//       ];
//     }
//   });
//   dispatch({ type: GET_FIND_ITEMS, payload: allCategories });
// };
