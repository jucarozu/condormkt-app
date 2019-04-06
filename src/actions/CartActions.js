/* ---------------------------
 Cart Actions
--------------------------- */

import axios from 'axios';
import * as R from 'ramda';

import { API_SERVER } from '../config';

// Action: getCart
// Description: Get cart from CondorMKT API.
export const getCart = () => dispatch => {  
  axios.get(`${API_SERVER}/api/cart`)
    .then(response => {
      dispatch({
        type: "GET_CART",
        payload: response.data.cart
      });
    })
    .catch(error => {
      dispatch({
        type: "GET_CART_ERROR",
        payload: error.message
      });
    });
};

// Action: addProductToCart
// Description: Add an item to the cart.
export const addProductToCart = cart => dispatch => {
  axios.post(`${API_SERVER}/api/cart`, cart)
    .then(response => {
      dispatch({
        type: "ADD_PRODUCT_TO_CART",
        payload: response.data.cart
      });
    })
    .catch(error => {
      dispatch({
        type: "ADD_PRODUCT_TO_CART_ERROR",
        payload: error.message
      });
    });
};

// Action: updateCart
// Description: Update data of one product of the cart.
export const updateCart = (_id, unit, cartUpdate) => dispatch => {
  // Determine index of product to update.
  const indexToUpdate = cartUpdate.findIndex(item => {
    return item.product._id === _id;
  });

  // Update product quantity to specified index in the cart.
  cartUpdate[indexToUpdate].quantity = cartUpdate[indexToUpdate].quantity + unit;

  axios.post(`${API_SERVER}/api/cart`, cartUpdate)
    .then(response => {
      dispatch({
        type: "UPDATE_CART",
        payload: response.data.cart
      });
    })
    .catch(error => {
      dispatch({
        type: "UPDATE_CART_ERROR",
        payload: error.message
      });
    });
};

// Action: removeProductFromCart
// Description: Remove an item of the cart.
export const removeProductFromCart = (_id, cartRemove) => dispatch => {    
  // Determine index of product to remove.
  const indexToRemove = cartRemove.findIndex(item => {
    return item.product._id === _id;
  });

  // Remove specified product of the cart.
  cartRemove = R.remove(indexToRemove, 1, cartRemove);

  axios.post(`${API_SERVER}/api/cart`, cartRemove)
    .then(response => {
      dispatch({
        type: "REMOVE_PRODUCT_FROM_CART",
        payload: response.data.cart
      });
    })
    .catch(error => {
      dispatch({
        type: "REMOVE_PRODUCT_FROM_CART_ERROR",
        payload: error.message
      });
    });
};

// Action: cleanCart
// Description: Returns the cart to the initial state.
export const cleanCart = () => dispatch => {
  axios.post(`${API_SERVER}/api/cart`, [])
    .then(response => {
      dispatch({
        type: "CLEAN_CART"
      });
    })
    .catch(error => {
      dispatch({
        type: "CLEAN_CART_ERROR",
        payload: error.message
      });
    });
};