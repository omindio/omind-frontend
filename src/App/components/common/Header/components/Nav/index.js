import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

class Nav extends Component {
  render() {
    return (
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/proyects">
            Proyects
          </Link>
        </nav>
    );
  }
}

export default Nav;
