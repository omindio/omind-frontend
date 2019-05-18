import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 380px;
  height: 180px;
  max-height: 180px;
  background: #fffa94;
`;
const Body = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 18px;
`;

const ServiceCard = props => {
  const { title, description } = props;
  return (
    <Card>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>
    </Card>
  );
};

export default ServiceCard;
