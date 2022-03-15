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
    default:
      return state
  }
}

export default globalReducer
