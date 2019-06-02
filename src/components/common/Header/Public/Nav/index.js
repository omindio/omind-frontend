import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Navbar as NavbarBootstrap, Nav as NavBootstrap, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { LogoWhite, LogoBlack } from '@components/common/Logo';
import { actions } from '@containers/UI/Nav';
import { MediaQueries } from '@utils/Styles';

import { Hamburguer, Content } from './components';

import './styles.scss';

const Logo = styled(NavbarBootstrap.Brand)`
  padding: 0;
  margin: 0;
`;

const Navbar = styled(NavbarBootstrap)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  transition: padding 0.3s linear;
  -webkit-transition: padding 0.3s linear;
  -moz-transition: padding 0.3s linear;
  -o-transition: padding 0.3s linear;
  ${MediaQueries.xs`padding: 0.8rem 2.2rem;`}
  ${MediaQueries.sm`padding: 0.9rem 2.2rem;`}
  ${MediaQueries.md`padding: 1rem 2.2rem;`}
  ${MediaQueries.lg`padding: 2.2rem;`}
  ${MediaQueries.xl`padding: 2.2rem;`}
  .container-fluid {
    z-index: 1000;
  }
  &.sticky {
    padding: 1rem 2.2rem;
  }
`;
/*
  TODO: ADD TO TODO BG OF NAV
*/
class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      className: 'transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > 150) {
      this.setState({ className: 'sticky bg-primary' });
    } else {
      this.setState({ className: 'bg-transparent' });
    }
  }

  handleClick() {
    const { isOpen, close } = this.props;
    if (isOpen) close();
  }

  render() {
    const { isOpen, color } = this.props;
    const { className } = this.state;
    return (
      <Navbar className={className}>
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
