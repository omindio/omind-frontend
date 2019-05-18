import React from 'react';

import { MainNav, PagesNav } from './components';

const HeaderProtected = () => {
  return (
    <header>
      <MainNav />
      <PagesNav />
    </header>
  );
};

export default HeaderProtected;
