import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as R from 'ramda';

import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Actions
import { addProductToCart, updateCart } from '../actions/CartActions';

// Selectors
import { showCart } from '../selectors/CartSelectors';

class AddToCartButton extends Component {

  constructor() {
    super();

    this.onAddProductToCart = this.onAddProductToCart.bind(this);
  };

  notify = message => toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: Flip
  });
  
  onAddProductToCart = product => {
    const cartWithNewItem = R.append(
      {
        product,
        quantity: 1
      },
      this.props.cart
    );

    // Check if cart is not empty.
    if (this.props.cart.length > 0) {
      const cartIndex = this.props.cart.findIndex(item => {
        return item.product._id === product._id;
      });

      // If return -1 then the cart doesn't have that 'id' yet.
      if (cartIndex === -1) {
        // Add the product to the cart.
        this.props.addProductToCart(cartWithNewItem);
      } else {
        // Product is already in the cart, then update quantity.
        this.props.updateCart(product._id, 1, this.props.cart);
      }
    } else {
      // If cart is empty, add the product.
      this.props.addProductToCart(cartWithNewItem);
    }
  };

  render = () => {
    return(
      <button 
        className="btn btn-success btn-block" 
        onClick={async () => {
          await this.onAddProductToCart(this.props.product);
          this.notify("Product added to cart!");
        }}
      >
        Add to Cart
      </button>
    );
  };
}

const mapStateToProps = state => ({
  cart: showCart(state)
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: cart => dispatch(addProductToCart(cart)),
  updateCart: (_id, unit, cart) => dispatch(updateCart(_id, unit, cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);