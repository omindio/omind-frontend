import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 225px;
  height: auto;
  background: #fffa94;
`;
const Body = styled.div`
  padding: 20px;
  text-align: center;
`;
const Name = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const ValueCard = props => {
  const { name } = props;
  return (
    <Card>
      <Body>
        <Name>{name}</Name>
      </Body>
    </Card>
  );
};

export default ValueCard;
