/* ---------------------------
 Cart Selectors
--------------------------- */

import * as R from 'ramda';

// Selector: showCart
// Description: Return the added products to the cart.
export const showCart = state => {
  return state.CartReducers;
};

// Selector: showTotalCartQuantity
// Description: Returns total quantity of added products to the cart.
export const showTotalCartQuantity = state => {
  return calculateTotals(state).totalQuantity;
};

// Selector: showTotalCartAmount
// Description: Returns total amount of added products to the cart.
export const showTotalCartAmount = state => {
  return calculateTotals(state).totalAmount;
};

// Selector: calculateTotals
// Description: Calculate total quantity and total amount of added products to the cart.
export const calculateTotals = state => {
  const cart = showCart(state);
  
  // Total quantity
  const calculateTotalQuantity = R.reduce(
    R.add,
    0,
    R.map(
      (item) => item.quantity,
      cart
    )
  );

  // Total amount
  const calculateTotalAmount = R.reduce(
    R.add,
    0,
    R.map(
      (item) => item.product.price * item.quantity,
      cart
    )
  );

  return({
    totalQuantity: calculateTotalQuantity,
    totalAmount: calculateTotalAmount
  });
}