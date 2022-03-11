import axiosInstance from "../../helpers/axios"
import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes"
// so actions are responsible for making api calls and tells the reducer how to update the state.

export const registerAction = (user) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING })

  axiosInstance
    .post("/register", user)
    .then((response) => {
      console.log("response from registerAction", response)
      dispatch({ type: REGISTER_SUCCESS, payload: response.data })
    })
    .catch((error) => {
      console.log("error from registerAction", error)
      dispatch({ type: REGISTER_ERROR, payload: error.response.data })
    })
}
