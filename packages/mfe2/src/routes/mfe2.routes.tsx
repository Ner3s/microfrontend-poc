import React, { lazy } from 'react';

import { RouteObject } from 'react-router-dom';

const Home = lazy(() =>
  import('~/pages/Home').then(container => ({ default: container.Home })),
);

const routes: RouteObject[] = [
  {
    path: '/mfe2',
    element: <Home />,
  },
];

export { routes };
