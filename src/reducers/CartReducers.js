/* ---------------------------
 Cart Reducers
--------------------------- */

const initialState = [];

// Set state of data associated to cart page depending of the dispatched action.
export default (state = initialState, action) => {
  
  switch (action.type) {

    case "GET_CART":
      return action.payload;
    
    case "ADD_PRODUCT_TO_CART":
      return action.payload;

    case "UPDATE_CART":
      return action.payload;

    case "REMOVE_PRODUCT_FROM_CART":
      return action.payload;

    case "CLEAN_CART":
      return initialState;

    default:
      return state;
  }
};