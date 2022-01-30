import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { getText, ITextMessage } from '~/store/textMessageSlice';

import * as S from './styles';

function Money(): ReactElement {
  const textReceive = useSelector<RootState, ITextMessage>(getText);

  return (
    <S.Container>
      <S.Header>
        <h1>Money</h1>
      </S.Header>
      <S.Card>
        <h2>R$ 2.000,00</h2>
        <p style={{ marginTop: '1.5rem' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro harum
          animi nulla laboriosam dolore illo, quis quo, vel unde ipsa cupiditate
          consectetur atque ut illum labore optio error accusantium repudiandae!
        </p>
        <p style={{margin: '2rem 0'}}>
          SHELL TEXT RECEIVE: {textReceive.text}
        </p>
      </S.Card>
    </S.Container>
  );
}

export { Money };
