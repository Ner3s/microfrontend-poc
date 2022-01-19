import React, { ReactElement } from 'react';

import { ReactImg } from '~/assets/images';

import packageJson from '../../../package.json';

function Home(): ReactElement {
  return (
    <>
      <h1>Home Shell {packageJson.version}</h1>
      <img src={ReactImg} alt="" />
    </>
  );
}

export { Home };
