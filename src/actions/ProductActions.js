/* ---------------------------
 Product Actions
--------------------------- */

import axios from 'axios';

// import { API_SERVER } from '../config';

// Action: getProducts
// Description: Get all products from CondorMKT API.
export const getProducts = () => async dispatch => {
  // axios.get(`${API_SERVER}/api/products`)
  axios.get('/api/products')
    .then(response => {
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data.products
      });
    })
    .catch(error => {
      dispatch({
        type: "GET_PRODUCTS_ERROR",
        payload: error
      });
    });
};

// Action: getProductById
// Description: Get a product by id from CondorMKT API.
export const getProductById = id => async dispatch => {
  // axios.get(`${API_SERVER}/api/products/${id}`)
  axios.get(`/api/products/${id}`)
    .then(response => {
      dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: response.data.product
      });
    })
    .catch(error => {
      dispatch({
        type: "GET_PRODUCT_BY_ID_ERROR",
        payload: error
      });
    });
};

// Action: searchProducts
// Description: Find products by a selected category.
export const searchProducts = text => async dispatch => {
  dispatch({
    type: 'SEARCH_PRODUCTS',
    payload: text
  });
};