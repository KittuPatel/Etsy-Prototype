import {
  ADD_FAVORITE_ITEM_LOADING,
  ADD_FAVORITE_ITEM_ERROR,
  ADD_FAVORITE_ITEM_SUCCESS,
  LOGOUT_USER,
  CHECK_SHOP_NAME_LOADING,
  CHECK_SHOP_NAME_SUCCESS,
  CHECK_SHOP_NAME_ERROR,
  GET_SHOP_LOADING,
  GET_SHOP_SUCCESS,
  GET_SHOP_ERROR,
} from "../actions/actionTypes"

import globalInitialState from "../initialState/globalInitialState"
import authInitialState from "../initialState/authInitialState"

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    case "PRODUCTS_LOADING":
      return {
        ...state,
        products: {
          ...state.products,
          loading: true,
          error: false,
        },
      }
    case "PRODUCTS_SUCCESS":
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: false,
          data: action.payload,
        },
      }
    case "PRODUCTS_ERROR":
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: action.payload,
        },
      }
    case "FAVORITES_LOADING":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: true,
          error: false,
        },
      }
    case "FAVORITES_SUCCESS":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: false,
          error: false,
          data: action.payload,
        },
      }
    case "FAVORITES_ERROR":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: false,
          error: action.payload,
        },
      }
    case ADD_FAVORITE_ITEM_LOADING:
      return {
        ...state,
        addToFavorite: {
          ...state.addToFavorite,
          loading: true,
          error: false,
        },
      }
    case ADD_FAVORITE_ITEM_SUCCESS:
      return {
        ...state,
        addToFavorite: {
          ...state.addToFavorite,
          loading: false,
          error: false,
          data: action.payload,
        },
      }
    case ADD_FAVORITE_ITEM_ERROR:
      return {
        ...state,
        addToFavorite: {
          ...state.addToFavorite,
          loading: false,
          error: action.payload,
        },
      }

    // case "DELETE_FAVORITES_LOADING":
    //   return {
    //     ...state,
    //     favorites: {
    //       ...state.favorites,
    //       loading: true,
    //       error: false,
    //     },
    //   }
    // case "DELETE_FAVORITES_SUCCESS":
    //   return {
    //     ...state,
    //     favorites: {
    //       ...state.favorites,
    //       loading: false,
    //       error: false,
    //       data: (state.favorites.data || []).filter(
    //         (item) => item.id !== action.payload
    //       ),
    //     },
    //   }
    // case "DELETE_FAVORITES_ERROR":
    //   return {
    //     ...state,
    //     favorites: {
    //       ...state.favorites,
    //       loading: false,
    //       error: action.payload,
    //     },
    //   }

    case GET_SHOP_LOADING:
      return {
        ...state,
        shop: {
          ...state.shop,
          loading: true,
          error: false,
        },
      }
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        shop: {
          ...state.shop,
          loading: false,
          error: false,
          data: action.payload,
        },
      }
    case GET_SHOP_ERROR:
      return {
        ...state,
        shop: {
          ...state.shop,
          loading: false,
          error: action.payload,
        },
      }

    case LOGOUT_USER:
      return {
        ...state,
        ...globalInitialState,
      }
    default:
      return state
  }
}

export default globalReducer
