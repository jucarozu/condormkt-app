/* ---------------------------
 Category Reducers
--------------------------- */

import * as R from 'ramda';

const initialState = {};

// Set the state of the data associated to the CategoriesList component depending of the dispatched action.
export default (state = initialState, action) => {
  
  switch (action.type) {
    
    case "GET_CATEGORIES":
      return(
        R.mergeRight(
          state,
          R.indexBy(
            R.prop('_id'),
            action.payload
          )
        )
      );

    default:
      return state;
  }
};