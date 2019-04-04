/* ---------------------------
 Category Actions
--------------------------- */

import axios from 'axios';

//const API_SERVER = process.env.API_SERVER;
import { API_SERVER } from '../../config';

// Action: getCategories
// Description: Fetch all categories from CondorMKT API.
export const getCategories = () => async dispatch => {
  console.log(API_SERVER);
  axios.get(`${API_SERVER}/api/categories`)
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