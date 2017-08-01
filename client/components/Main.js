import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
          {this.props.children}
        </h1>
      </div>
    );
  }
};

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default Main;
