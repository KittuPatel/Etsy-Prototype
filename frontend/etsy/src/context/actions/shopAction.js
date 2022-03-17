import axiosInstance from "../../helpers/axiosInstance"
import {
  CHECK_SHOP_NAME_ERROR,
  CHECK_SHOP_NAME_LOADING,
  CHECK_SHOP_NAME_SUCCESS,
} from "./actionTypes"

export const checkShopNameAction = (userId, shopName) => (dispatch) => {
  dispatch({ type: CHECK_SHOP_NAME_LOADING })
  // /users/{{userId}}/shop/checkavailability?shopname=citymart
  axiosInstance()
    .get(`/users/${userId}/shop/checkavailability?shopname=${shopName}`)
    .then((response) => {
      console.log("response from checkShopNameAction", response.data)
      dispatch({ type: CHECK_SHOP_NAME_SUCCESS, payload: response.data })
    })
    .catch((error) => {
      console.log("error from checkShopNameAction", error)
      dispatch({
        type: CHECK_SHOP_NAME_ERROR,
        payload: error.response ? error.response.data : "Could not connect",
      })
    })
}
