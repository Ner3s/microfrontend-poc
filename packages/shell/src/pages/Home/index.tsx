import React, { ReactElement } from 'react';

import * as S from './styles';

function Home(): ReactElement {
  return (
    <S.Container>
      <S.Header>
        <h1>Home</h1>
      </S.Header>
      <S.Content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          fuga dolores, ratione unde necessitatibus mollitia ab reprehenderit
          aperiam consectetur sit labore illo, deserunt neque molestiae, et
          tempore. Perferendis, et beatae.
        </p>
      </S.Content>
    </S.Container>
  );
}

export { Home };
