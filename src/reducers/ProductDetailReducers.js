/* ---------------------------
 Product Detail Reducers
--------------------------- */

import * as R from 'ramda';

const initialState = {
  id: null
};

// Set the state of the data associated to the ProductDetail page depending of the dispatched action.
export default (state = initialState, action) => {  
  switch (action.type) {    
    case "GET_PRODUCT_BY_ID":
      return(
        R.mergeRight(
          state,
          {
            id: R.prop('_id', action.payload)
          }
        )
      );
    default:
      return state;
  }
};