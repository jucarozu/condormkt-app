import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Selectors
import { showTotalCartQuantity } from '../selectors/CartSelectors';

// Actions
import { getCart } from '../actions/CartActions';

class CartWidget extends Component {

  componentDidMount = () => {
    this.props.getCart();
  };
  
  render = () => {
    return(    
      <Link to="/cart" className="nav-link">
        <h6 id="cart-widget" className="font-weight-bold">
          Cart &nbsp;
          <span className="badge badge-primary">
            {this.props.totalCartQuantity}
          </span>
        </h6>
      </Link>
    );
  };
}

const mapStateToProps = state => ({
  totalCartQuantity: showTotalCartQuantity(state)
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);