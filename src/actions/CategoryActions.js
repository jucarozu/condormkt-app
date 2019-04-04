/* ---------------------------
 Category Actions
--------------------------- */

import axios from 'axios';

// Action: getCategories
// Description: Fetch all categories from CondorMKT API.
export const getCategories = () => async dispatch => {  
  axios.get("/api/categories")
    .then((response) => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: response.data.categories
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_CATEGORIES_ERROR",
        payload: error.response.data
      });
    });
}