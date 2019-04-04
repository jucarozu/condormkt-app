import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { API_SERVER } from '../config';

// Actions
import { getProducts } from '../../actions/ProductActions';

// Selectors
import { showProducts } from '../../selectors/ProductSelectors';

// Components
import Banner from '../Banner';
import Search from '../Search';
import CategoriesList from '../CategoriesList';
import AddToCartButton from '../AddToCartButton';

class ProductsList extends Component {

  componentDidMount = () => {
    // Get all products from associated action.
    this.props.getProducts();
  };

  renderProduct = product => {
    return(
      <div className='col-sm-12 col-md-12 col-lg-6 product-list' key={product._id}>
        <div className="thumbnail">
          <Link to={`/products/${product._id}`}>
            <img className='img-thumbnail'
              src={API_SERVER + product.photo}
              alt={product.name}
            />
          </Link>
        </div>
        
        <div className="caption">
          <h4 className="pull-right">
            ${product.price}
          </h4>
          <h4>
            <Link to={`/products/${product._id}`}>
              {product.name}
            </Link>
          </h4>
          <p className='btn-item'>
            <AddToCartButton product={product} />
          </p>
        </div>
      </div>
    );
  };

  render = () => {
    return(
      <div>
        <Banner />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Search />
              <CategoriesList />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="products row">
                {
                  this.props.products.map(product => {
                    return this.renderProduct(product);
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  products: showProducts(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);