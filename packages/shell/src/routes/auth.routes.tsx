import React, { lazy } from 'react';

import { RouteObject, Navigate } from 'react-router-dom';

import { SuspenseRoute } from './custom';

const SignIn = lazy(() =>
  import('~/pages/SignIn').then(Page => ({
    default: Page.SignIn,
  })),
);

const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SuspenseRoute element={<SignIn />} />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
];

export { authRoutes };
