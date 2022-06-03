
import {
  SET_AUTH,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN
} from "../reducers/authReducer";


export const setAuth = (isAuth) =>({
  type:SET_AUTH,
  payload: isAuth,
})
export const setAccessToken = (accessToken) =>({
  type:SET_ACCESS_TOKEN,
  payload: accessToken,
})
export const setRefreshToken = (refreshToken) =>({
  type:SET_REFRESH_TOKEN,
  payload: refreshToken,
})

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
