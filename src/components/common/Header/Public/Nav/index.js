import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Navbar as NavbarBootstrap, Nav as NavBootstrap, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { LogoWhite, LogoBlack } from '@components/common/Logo';
import { actions } from '@containers/UI/Nav';

import { Hamburguer, Content } from './components';

import './styles.scss';

const Logo = styled(NavbarBootstrap.Brand)`
  padding: 0;
  margin: 0;
`;

const Navbar = styled(NavbarBootstrap)`
  padding: 2.2rem;

  .container-fluid {
    z-index: 1000;
  }
`;
class Nav extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // eslint-disable-next-line class-methods-use-this
  handleScroll() {
    const windowsScrollTop = window.pageYOffset;
    console.log(windowsScrollTop);
  }

  handleClick() {
    const { isOpen, close } = this.props;
    if (isOpen) close();
  }

  render() {
    const { isOpen, color } = this.props;

    return (
      <Navbar className="fixed-top" bg="transparent">
        <Container fluid="true">
          <LinkContainer to="/">
            <Logo onClick={this.handleClick}>
              {isOpen || color === 'black' ? <LogoBlack /> : <LogoWhite />}
            </Logo>
          </LinkContainer>

          <NavBootstrap className="ml-auto d-flex flex-column justify-content-center">
            <Hamburguer color={color} />
          </NavBootstrap>
        </Container>
        <CSSTransition in={isOpen} timeout={300} classNames="nav__content" unmountOnExit>
          <Content />
        </CSSTransition>
      </Navbar>
    );
  }
}

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { nav } = state.ui;
  const { isOpen } = nav;
  return {
    isOpen,
  };
}

const mapDispatchToProps = dispatch => {
  const { closeAction } = actions;
  return {
    close: () => dispatch(closeAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
