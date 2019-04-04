/* ---------------------------
 Product Selectors
--------------------------- */

import * as R from 'ramda';

import { showActiveCategoryId } from './CategorySelectors';

// Selector: showProducts
// Description: Return all products with applied filters (category, search).
export const showProducts = (state, ownProps) => {

  // Get 'id' of the selected category.
  const activeCategoryId = showActiveCategoryId(ownProps);

  // Search products whose 'category' match with the given category.
  const applyCategory = item => {
    return(
      R.equals(
        activeCategoryId,
        R.prop('category', item)
      )
    );
  };

  // Search products whose 'name' match with the given text.
  const applySearch = item => {
    return(
      R.includes(
        R.toLower(R.trim(state.ProductsListReducers.search)),
        R.toLower(R.prop('name', item))
      )
    );
  };

  // Return the products whose match with all applied filters.
  const products = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => showProductById(state, id))
  )(state.ProductsListReducers.ids);

  return products;
};

// Selector: showProductById
// Description: Return a product object filtering by id.
export const showProductById = (state, id) => {
  return R.prop(id, state.ProductReducers);
};