import React, { ReactElement, Suspense } from 'react';

import { BrowserRouter, useRoutes } from 'react-router-dom';

import { useAuth } from '~/hooks/auth';

import { authRoutes } from './auth.routes';
import { routes } from './shell.routes';

function Routes(): ReactElement {
  const { isAuthenticated } = useAuth();

  const element = useRoutes(!isAuthenticated ? authRoutes : routes);

  return element as ReactElement;
}

function RoutesApp(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesApp;
