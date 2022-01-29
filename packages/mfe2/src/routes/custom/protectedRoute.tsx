import React, { ReactElement } from 'react';

import { Navigate, RouteObject, useLocation } from 'react-router-dom';

import { useAuth } from '~/hooks/authMock';

import { SuspenseRoute } from '.';

type TProtectedRoute = RouteObject;

/**
 * @param element = Component Render
 * @returns Component or Redirect
 *
 * ### RN
 * - If the user is authenticated render the component.
 * - If not redirect the user.
 */

function ProtectedRoute({ element }: TProtectedRoute): ReactElement {
  const location = useLocation();
  const { isAuthenticated } = useAuth;
  const isAuthenticatedStored = localStorage.getItem(`@MFE:user`);

  if (!isAuthenticated && !isAuthenticatedStored) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <SuspenseRoute element={element} />;
}

export { ProtectedRoute };
