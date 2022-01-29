import React, { lazy } from 'react';

import { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from './custom';

const Money = lazy(() =>
  import('~/pages/Money').then(page => ({ default: page.Money })),
);

const routes: RouteObject[] = [
  {
    path: '/money',
    element: <ProtectedRoute element={<Money />} />,
  },
];

export { routes };
