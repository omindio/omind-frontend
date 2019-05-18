import React, { Component } from 'react';
import styled from 'styled-components';
import { actions } from '@containers/UI/Nav';

const HamburguerStyled = styled.div`
  display: block;
  transition: 0.3s;
  cursor: pointer;
  span {
    position: relative;
    transition: 0.3s;
    height: 5px;
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
    width: 22px;
  }
  span:nth-child(2) {
    margin-top: 3px;
    width: 14px;
  }

  &:hover span:nth-child(2) {
    width: 22px;
  }

  &.open span {
    background-color: #0e1111 !important;
  }
  &.open span:nth-child(1) {
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);

    top: 8px;
  }
  &.open span:nth-child(2) {
    width: 22px;
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
    const { dispatch, isOpen } = this.props;

    if (isOpen) {
      dispatch(actions.closeAction());
    } else {
      dispatch(actions.openAction());
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

export default Hamburguer;
