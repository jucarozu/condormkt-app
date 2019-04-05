/* ---------------------------
 Category Actions
--------------------------- */

import axios from 'axios';

// import { API_SERVER } from '../config';

// Action: getCategories
// Description: Fetch all categories from CondorMKT API.
export const getCategories = () => async dispatch => {
  // axios.get(`${API_SERVER}/api/categories`)
  axios.get('/api/categories')
    .then((response) => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: response.data.categories
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_CATEGORIES_ERROR",
        payload: error
      });
    });
}