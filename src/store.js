import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import CategoryReducers from './reducers/CategoryReducers';
import ProductReducers from './reducers/ProductReducers';
import ProductsListReducers from './reducers/ProductsListReducers';
import ProductDetailReducers from './reducers/ProductDetailReducers';
import CartReducers from './reducers/CartReducers';

// Manage the application state with Redux
export default combineReducers({
  routing: routerReducer,
  CategoryReducers: CategoryReducers,
  ProductReducers: ProductReducers,
  ProductsListReducers: ProductsListReducers,
  ProductDetailReducers: ProductDetailReducers,
  CartReducers: CartReducers
});