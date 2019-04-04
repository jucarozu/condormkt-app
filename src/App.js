import './App.css';

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import ProductsList from './components/pages/ProductsList';
import ProductDetail from './components/pages/ProductDetail';
import Cart from './components/pages/Cart';

// Reducers
import reducers from './store';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);

class App extends Component {
  
  render = () => {
    const App = () => (
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path='/' component={ProductsList} />
              <Route path='/categories/:id' component={ProductsList} />
              <Route path="/products/:id" component={ProductDetail} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );

    return(<App />);
  };
}

export default App;
