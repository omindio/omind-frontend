import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from '@containers/UI/Nav';
import { MediaQueries } from '@utils/Styles';

const HamburguerStyled = styled.div`
  display: block;
  transition: 0.3s;
  cursor: pointer;
  span {
    position: relative;
    transition: 0.3s;
    ${MediaQueries.xs`height: 3px;`}
    ${MediaQueries.sm`height: 4px;`}
    ${MediaQueries.md`height: 5px;`}
    ${MediaQueries.lg`height: 5px;`}
    ${MediaQueries.xl`height: 5px;`}
    background-color: #fff;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    display: block;
  }
  span:nth-child(1) {

    ${MediaQueries.xs`width: 18px;`}
    ${MediaQueries.sm`width: 20px;`}
    ${MediaQueries.md`width: 22px;`}
    ${MediaQueries.lg`width: 22px;`}
    ${MediaQueries.xl`width: 22px;`}
  }
  span:nth-child(2) {
    margin-top: 3px;
    ${MediaQueries.xs`width: 10px;`}
    ${MediaQueries.sm`width: 12px;`}
    ${MediaQueries.md`width: 14px;`}
    ${MediaQueries.lg`width: 14px;`}
    ${MediaQueries.xl`width: 14px;`}
  }

  &:hover span:nth-child(2), &.open span:nth-child(2) {
    ${MediaQueries.xs`width: 18px;`}
    ${MediaQueries.sm`width: 20px;`}
    ${MediaQueries.md`width: 22px;`}
    ${MediaQueries.lg`width: 22px;`}
    ${MediaQueries.xl`width: 22px;`}
  }

  &.open span {
    background-color: #0e1111 !important;
  }
  &.open span:nth-child(1) {
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    ${MediaQueries.xs`top: 6px;`}
    ${MediaQueries.sm`top: 7px;`}
    ${MediaQueries.md`top: 8px;`}
    ${MediaQueries.lg`top: 8px;`}
    ${MediaQueries.xl`top: 8px;`}

  }
  &.open span:nth-child(2) {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }
`;

class Hamburguer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen, open, close } = this.props;

    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  render() {
    const { isOpen, color } = this.props;
    return (
      <HamburguerStyled className={isOpen ? 'open' : ''} onClick={this.handleClick}>
        <span className={color === 'black' ? 'bg-primary' : 'bg-white'} />
        <span className={color === 'black' ? 'bg-primary' : 'bg-white'} />
      </HamburguerStyled>
    );
  }
}

function mapStateToProps(state) {
  const { nav } = state.ui;
  const { isOpen } = nav;
  return {
    isOpen,
  };
}

const mapDispatchToProps = dispatch => {
  const { closeAction, openAction } = actions;
  return {
    open: () => dispatch(openAction()),
    close: () => dispatch(closeAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hamburguer);
