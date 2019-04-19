import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class Nav extends Component {
    render () {
        return (
            <nav>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        );
    }
}

export default Nav;
