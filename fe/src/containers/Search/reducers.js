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
