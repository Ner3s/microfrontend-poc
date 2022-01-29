import React, { ReactElement } from 'react';

import { Outlet } from 'react-router';

import Navbar from '~/components/Navbar';

import * as S from './styles';

function Dashboard(): ReactElement {
  return (
    <>
      <Navbar />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}

export { Dashboard };
