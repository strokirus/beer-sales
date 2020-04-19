import C from './constants';

const initialState = {
  items: [],
  text: '', 
  status: {
    isLoading: false,
    isError: false,
  },
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };

    case C.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.data,
        status: {
          ...state.status,
          isLoading: false,
        },
      };

    case C.FETCH_PRODUCTS_FAILURE:
      return {
        ...initialState,
        status: {
          isError: true,
          isLoading: false,
          message: action.error,
        },
      };

    case C.SET_TEXT:
      return {
        ...state,
        text: action.params,
      };      

    default:
      return state || initialState;
  }
};

export default searchReducer;
