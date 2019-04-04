import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartWidget from './CartWidget';

class Header extends Component {

  render = () => {
    return(
      <header>
        <nav className="navbar fixed-top bg-white justify-content-between">
          <Link to="/" className="navbar-brand">
            <img src="https://i.imgur.com/RzODJwJ.png" alt="CondorMKT" />
          </Link>

          <CartWidget />
        </nav>
      </header>
    );
  };
}

export default Header;