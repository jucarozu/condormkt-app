/* ---------------------------
 Product Reducers
--------------------------- */

import * as R from 'ramda';

const initialState = {};

// Set the state of the shared data structure of ProductList and ProductDetail pages depending of the dispatched action.
export default (state = initialState, action) => {  
  switch (action.type) {    
    case "GET_PRODUCTS":
      return(
        R.indexBy(
          R.prop('_id'),
          action.payload
        )
      );
    case "GET_PRODUCT_BY_ID":
      return(
        R.assoc(
          action.payload._id,
          action.payload,
          state
        )
      );
    default:
      return state;
  }
};