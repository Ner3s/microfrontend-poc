/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import React, { lazy } from 'react';

import { RouteObject } from 'react-router-dom';

import { externalRoutes } from './modules.routes';

const Home = lazy(() =>
  import('~/pages/Home').then(container => ({ default: container.Home })),
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

Object.entries(externalRoutes).map(([key, module]) => {
  try {
    const { routes: importedRoutes } = module() as {
      routes: RouteObject[];
    };

    routes.push(...importedRoutes);
  } catch (error) {
    console.warn(`Não foi possível importar as rotas do módulo: ${key}`);
  }
});

export { routes };
