/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import React, { lazy, Suspense } from 'react';

import { RouteObject, Navigate } from 'react-router-dom';

import { ProtectedRoute } from './custom';
import { externalRoutes } from './modules.routes';

const Dashboard = lazy(() =>
  import('~/pages/Dashboard').then(container => ({
    default: container.Dashboard,
  })),
);

const Home = lazy(() =>
  import('~/pages/Home').then(container => ({
    default: container.Home,
  })),
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute element={<Dashboard />} />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute element={<Home />} />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

Object.entries(externalRoutes).map(([key, module]) => {
  try {
    const { routes: importedRoutes } = module() as {
      routes: RouteObject[];
    };

    routes[0].children.push(...importedRoutes);
  } catch (error) {
    console.warn(`Não foi possível importar as rotas do módulo: ${key}`);
  }
});

export { routes };
