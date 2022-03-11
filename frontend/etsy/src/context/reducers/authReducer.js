import {
  REGISTER_LOADING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions/actionTypes"

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          error: false,
        },
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: action.payload,
        },
      }

    case REGISTER_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: action.payload,
        },
      }

    default:
      return state
  }
}

export default authReducer
