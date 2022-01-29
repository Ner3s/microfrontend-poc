import React, { ReactElement, Suspense } from 'react';

import {
  BrowserRouter,
  useRoutes,
  RouteObject,
  Navigate,
} from 'react-router-dom';

import { routes } from './mfe2.routes';

function Routes(): ReactElement {
  const routesInternal: RouteObject[] = [
    ...routes,
    { path: '*', element: <Navigate to="/money" replace /> },
  ];

  const element = useRoutes(routesInternal);

  return element;
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
