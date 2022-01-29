import React, { ReactElement, Suspense } from 'react';

import { RouteObject } from 'react-router-dom';

type TSuspenseRoute = RouteObject;

function SuspenseRoute({ element }: TSuspenseRoute): ReactElement {
  return <Suspense fallback="Loading...">{element}</Suspense>;
}

export { SuspenseRoute };
