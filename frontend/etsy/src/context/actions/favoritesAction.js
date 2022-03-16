import axiosInstance from "../../helpers/axiosInstance"
import {
  FAVORITES_ERROR,
  FAVORITES_LOADING,
  FAVORITES_SUCCESS,
  DELETE_FAVORITES_ERROR,
  DELETE_FAVORITES_LOADING,
  DELETE_FAVORITES_SUCCESS,
} from "./actionTypes"
// so actions are responsible for making api calls and tells the reducer how to update the state.

export const favoritesAction = (userId) => (dispatch) => {
  dispatch({ type: FAVORITES_LOADING })

  axiosInstance()
    .get(`/users/${userId}/favorites`)
    .then((response) => {
      console.log("response from favoritesAction", response.data)
      dispatch({ type: FAVORITES_SUCCESS, payload: response.data })
    })
    .catch((error) => {
      console.log("error from favoritesAction", error)
      dispatch({
        type: FAVORITES_ERROR,
        payload: error.response ? error.response.data : "Could not connect",
      })
    })
}

export const postFavoritesAction = (productId, userID) => (dispatch) => {}
// export const deleteFavoritesAction = (userId, id) => (dispatch) => {
//   dispatch({ type: DELETE_FAVORITES_LOADING })
//   axiosInstance()
//     .delete(`/users/${userId}/favorites/${id}`)
//     .then((response) => {
//       console.log("response from deleteFavoritesAction", response.data)
//       dispatch({ type: DELETE_FAVORITES_SUCCESS, payload: id })
//     })
//     .catch((error) => {
//       console.log("error from deleteFavoritesAction", error)
//       dispatch({
//         type: DELETE_FAVORITES_ERROR,
//         payload: error.response ? error.response.data : "Could not connect",
//       })
//     })
// }
