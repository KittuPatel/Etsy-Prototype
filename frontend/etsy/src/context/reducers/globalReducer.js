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
    default:
      return state
  }
}

export default globalReducer
