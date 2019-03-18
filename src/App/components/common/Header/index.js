import React, { Component } from 'react';
import Nav from './components/Nav';
import './styles.scss';

class Header extends Component {
  render() {
    return (
        <header>
            <Nav />
        </header>
    );
  }
}

export default Header;
