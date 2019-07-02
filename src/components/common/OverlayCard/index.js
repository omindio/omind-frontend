import React from 'react';
import styled from 'styled-components';

import { Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MediaQueries } from '@utils/Styles';

const CardProyect = styled.div`
  background: #fffa94;
  ${MediaQueries.xs`flex-basis: 100%;`}
  ${MediaQueries.sm`flex-basis: 100%;`}
  ${MediaQueries.md`flex-basis: 50%;`}
  ${MediaQueries.lg`flex-basis: 50%;`}
  ${MediaQueries.xl`flex-basis: 50%;`}
  position: relative;
  overflow: hidden;
`;

/*
   &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: rgba(255, 250, 148, 0.12);
    left: 0;
    top: 0;
    display: block;
  }
*/

const Mask = styled.div`
  &:hover {
    opacity: 1;
  }
  background: linear-gradient(180deg, transparent 0, rgb(14, 17, 17) 94%);
  opacity: 0;
  transition: all 0.4s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  color: #fff;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 10% 10% 10%;
  padding-bottom: 10%;
  ${MediaQueries.xs`font-size: 18px;`}
  ${MediaQueries.sm`font-size: 22px;`}
  ${MediaQueries.md`font-size: 24px;`}
  ${MediaQueries.lg`font-size: 25px;`}
`;

const OverlayCard = props => {
  const { image, alt, title, to } = props;
  return (
    <CardProyect>
      {image && <Image fluid src={image} alt={alt} />}

      <LinkContainer to={to}>
        <Mask>
          <Title>{title}</Title>
        </Mask>
      </LinkContainer>
    </CardProyect>
  );
};

export default OverlayCard;
