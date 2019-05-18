import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

const HeaderPublic = props => {
  const { color } = props;
  return (
    <header>
      <Nav color={color} />
    </header>
  );
};

HeaderPublic.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HeaderPublic;
