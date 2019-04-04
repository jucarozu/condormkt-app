/* ---------------------------
 Category Selectors
--------------------------- */

import * as R from 'ramda';

// Selector: showCategories
// Description: Return all categories.
export const showCategories = state => {
  return(
    R.values(state.CategoryReducers)
  );
};

// Selector: showActiveCategoryId
// Description: Return the active id category.
export const showActiveCategoryId = ownProps => {
  return(
    ownProps.match.params.id
  );
};