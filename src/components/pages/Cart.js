import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as R from 'ramda';

// Selectors
import { showCart, showTotalCartAmount } from '../../selectors/CartSelectors';

// Actions
import { updateCart, removeProductFromCart, cleanCart } from '../../actions/CartActions';

class Cart extends Component {
  
  constructor() {
    super();

    this.onIncrementProductFromCart = this.onIncrementProductFromCart.bind(this);
    this.onDecrementProductFromCart = this.onDecrementProductFromCart.bind(this);
    this.onRemoveProductFromCart = this.onRemoveProductFromCart.bind(this);
  };

  onIncrementProductFromCart = _id => {
    // Increment product quantity.
    this.props.updateCart(_id, 1, this.props.cart);
  }

  onDecrementProductFromCart = (_id, quantity) => {
    // Check quantity > 1 because only can decrement until 0.
    if (quantity > 1) {
      // Decrement product quantity.
      this.props.updateCart(_id, -1, this.props.cart);
    } else {
      return;
    }
  }

  onRemoveProductFromCart = _id => {
    // Remove a product of the cart.
    this.props.removeProductFromCart(_id, this.props.cart);
  }

  renderContent = () => {
    return (
      <div>
        {
          R.isEmpty(this.props.cart)
          && 
          <div> Your shopping cart is empty </div>
        }
        
        {
          this.props.cart.map(
            item => (
              <div className="row item-checkout" key={item.product._id}>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <span className="font-weight-bold">
                    {item.product.name}
                  </span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2">
                  <span className="font-weight-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-1">
                  <span className="badge badge-primary font-weight-bold">
                    {item.quantity}
                  </span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3">
                  <div className="btn-group">
                    <button title='Increment' className='btn btn-xs btn-success' onClick={() => this.onIncrementProductFromCart(item.product._id)}>
                      <i className="material-icons">keyboard_arrow_up</i>
                    </button>
                    <button title='Decrement' className='btn btn-xs btn-success' onClick={() => this.onDecrementProductFromCart(item.product._id, item.quantity)}>
                      <i className="material-icons">keyboard_arrow_down</i>
                    </button>
                    <button title='Remove' className='btn btn-xs btn-danger' onClick={() => this.onRemoveProductFromCart(item.product._id)}>
                      <i className="material-icons">delete</i>
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        }

        {
          R.not(R.isEmpty(this.props.cart))
          &&
          <div className="container">
            <div className="row">
              <div className="pull-right total-user-checkout">
                <h5>Total: ${this.props.totalAmount.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        }
      </div>
    )
  };

  renderSidebar = () => {
    return(
      <div>
        <Link to="/" className="btn btn-success">
          <span>Continue Shopping</span>
        </Link>
        {
          R.not(R.isEmpty(this.props.cart))
          &&
          <div>
            <button className="btn btn-danger" onClick={this.props.cleanCart}>
              Clean Cart
            </button>
          </div>
        }
      </div>
    );
  };

  render = () => {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Shopping Cart</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-9">
            {this.renderContent()}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 btn-user-checkout">
            {this.renderSidebar()}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  cart: showCart(state),
  totalAmount: showTotalCartAmount(state)
});

const mapDispatchToProps = dispatch => ({
  updateCart: (_id, unit, cart) => dispatch(updateCart(_id, unit, cart)),
  removeProductFromCart: (_id, cart) => dispatch(removeProductFromCart(_id, cart)),
  cleanCart: () => dispatch(cleanCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);