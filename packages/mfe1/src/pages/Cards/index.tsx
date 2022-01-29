import React, { ReactElement } from 'react';

import * as S from './styles';

function Cards(): ReactElement {
  const labels = ['red', 'orange', 'yellow', 'green', 'blue'];

  return (
    <S.Container>
      <S.Header>
        <h1>Cards</h1>
      </S.Header>
      <S.WrapperCards>
        {labels.map(value => (
          <S.Card key={value} color={value}>
            <S.HeaderCard>
              <h1>{value.toUpperCase()}</h1>
              <S.Ball color={value} />
            </S.HeaderCard>
          </S.Card>
        ))}
      </S.WrapperCards>
    </S.Container>
  );
}

export { Cards };
