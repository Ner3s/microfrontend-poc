import React, { lazy, ReactElement, Suspense } from 'react';

import { MockComponent } from '~/components/MockComponent';

import * as S from './styles';

const Header = lazy(() =>
  import('shell/components/Header')
    .then(shell => ({ default: shell.Header }))
    .catch(() => ({
      default: () => <MockComponent textDisplay="Header MOCK" />,
    })),
);

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

      <p style={{ margin: '2rem 0' }}>Import other module</p>
      <Suspense fallback="...Loading">
        <Header />
      </Suspense>
    </S.Container>
  );
}

export { Cards };
