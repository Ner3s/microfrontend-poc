import React, { lazy } from 'react';

import { RouteObject, Navigate } from 'react-router-dom';

import { ProtectedRoute } from './custom';

const Cards = lazy(() =>
  import('~/pages/Cards').then(container => ({ default: container.Cards })),
);

const routes: RouteObject[] = [
  {
    path: '/cards',
    element: <ProtectedRoute element={<Cards />} />,
  },
];

export { routes };
