import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class Nav extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return (
            <nav>
                <NavLink to="/">About</NavLink>
                <NavLink to="/proyects">Our Work</NavLink>
                <NavLink to="/contact">Let's Talk</NavLink>

                {isAuthenticated ? (
                    <NavLink to="/logout">Sign out</NavLink>
                ) : (
                    <NavLink to="/login">Sign in</NavLink>
                )}
            </nav>
        );
    }
}

export default Nav;
