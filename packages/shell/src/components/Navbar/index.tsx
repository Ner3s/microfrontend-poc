import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { routesMock } from '~/utils/mocks/routesMock';

import * as S from './styles';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      {routesMock.map(({ path, icon: Icon }) => (
        <S.Link
          onClick={() => navigate(path)}
          key={path}
          isActive={location.pathname === path}
        >
          <Icon />{' '}
        </S.Link>
      ))}
    </S.Container>
  );
}

export default Navbar;
