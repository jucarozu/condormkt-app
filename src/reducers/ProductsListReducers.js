/* ---------------------------
 Products List Reducers
--------------------------- */

import * as R from 'ramda';

const initialState = {
  ids: [],
  search: ''
};

// Set the state of the data associated to the ProductsList page depending of the dispatched action.
export default (state = initialState, action) => {  
  switch (action.type) {    
    case "GET_PRODUCTS":
      return(
        R.mergeRight(
          state,
          {
            ids: R.pluck('_id', action.payload)
          }
        )
      );
    case "SEARCH_PRODUCTS":
      return(
        R.mergeRight(
          state,
          {
            search: action.payload
          }
        )
      );
    default:
      return state;
  }
}