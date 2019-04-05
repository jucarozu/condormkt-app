import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { API_SERVER } from '../../config';

// Actions
import { getProductById } from '../../actions/ProductActions';
import { addProductToCart } from '../../actions/CartActions';

// Selectors
import { showProductById } from '../../selectors/ProductSelectors';

// Components
import AddToCartButton from '../AddToCartButton';

class ProductDetail extends Component {

  componentDidMount = () => {
    // Get product detail from associated action by the 'id' route param.
    this.props.getProductById(this.props.match.params.id);
  };

  renderContent = product => {
    return(
      <div>
        <div className="row">
          <div className="col-md-6 thumbnail">
            <img className="img-thumbnail"
              src={product.photo}
              alt={product.name}
            />
          </div>
          <div className="col-md-6 caption-full container">
            <h2>
              {product.name}
            </h2>
            <h3>
              ${product.price}
            </h3>
            <p>
              <AddToCartButton product={product} />
            </p>
            <p className="description">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  render = () => {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/">
              <h5>Back to Store</h5>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className='col-md-12'>
            {
              this.props.product
              &&
              this.renderContent(this.props.product)
            }
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  product: showProductById(state, state.ProductDetailReducers.id)
});

const mapDispatchToProps = dispatch => ({
  getProductById: id => dispatch(getProductById(id)),
  addProductToCart: id => dispatch(addProductToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);