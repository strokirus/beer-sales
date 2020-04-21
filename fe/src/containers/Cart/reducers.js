import C from './constants';

const initialState = {
  items: [],
  total: 0,
  formatTotal: 'R$0,00', 
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case C.UPDATE_CART:
      return {
        ...state,
        items: action.data.items,
        total: action.data.total,
        formatTotal: action.data.formatTotal,
      };

    default:
      return state || initialState;
  }
};

export default cartReducer;
