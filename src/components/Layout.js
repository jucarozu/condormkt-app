import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from './Header';
import Footer from './Footer';
import ScrollButton from './ScrollButton';

class Layout extends Component {

  render = () => {
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
        <ScrollButton scrollStepInPx="200" delayInMs="16.66" />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </div>
    );
  };
}

export default Layout;