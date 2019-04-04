import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as R from 'ramda';
import classNames from 'classnames';

// Actions
import { getCategories } from '../actions/CategoryActions';

// Selectors
import { showCategories, showActiveCategoryId } from '../selectors/CategorySelectors';

class CategoriesList extends Component {
  
  componentDidMount = () => {
    // Get all categories from associated action.
    this.props.getCategories();
  };

  renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      active: R.isNil(this.props.activeCategoryId)
    });

    return(
      <Link to="/" className={linkClass}>
        All
      </Link>
    );
  };

  renderCategory = category => {
    const getActiveState = R.propEq('_id', this.props.activeCategoryId);

    const linkClass = classNames({
      'list-group-item': true,
      'active': getActiveState(category)
    });

    return(
      <Link to={`/categories/${category._id}`} className={linkClass} key={category._id}>
        {category.name}
      </Link>
    );
  };

  render = () => {
    return(
      <div id="categories-list" className="well">
        <h4>Categories</h4>
        <div className="list-group">
          {this.renderAllCategory()}
          {
            this.props.categories.map(category => {
              return this.renderCategory(category);
            })
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  categories: showCategories(state),
  activeCategoryId: showActiveCategoryId(ownProps)
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CategoriesList);