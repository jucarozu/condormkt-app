import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { searchProducts } from '../actions/ProductActions';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchProducts(this.state.searchValue);
  };

  onSearchInputChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render = () => {
    return(
      <div id="search" className="container well blosd">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="row input-group">
            <div className="col-xs-8">
              <input
                type="text"
                className="form-control"
                value={this.state.searchValue}
                onChange={this.onSearchInputChange}
                placeholder="Search"
              />
            </div>
            <div className="col-xs-4">
              <span className="input-group-btn">
                <button type="submit" className="btn btn-link">
                  <i className="material-icons">search</i>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  searchProducts: text => dispatch(searchProducts(text))
});

export default connect(undefined, mapDispatchToProps)(Search);