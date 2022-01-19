import React, { ReactElement, Suspense } from 'react';

import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routes } from './shell.routes';

function Routes(): ReactElement {
  const element = useRoutes(routes);

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
