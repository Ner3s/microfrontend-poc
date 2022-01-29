import React, { ReactElement } from 'react';

import { Navigate, RouteObject } from 'react-router-dom';

import { useAuth } from '~/hooks/auth';
import { TRole } from '~/models/Credentials';

import { ProtectedRoute } from './protectedRoute';

type TPermissionRoute = RouteObject & { role: TRole[] };

/**
 * @param role = Role Array | Ex.: ['admin', 'worker']
 * @param element = Component
 * @returns Component or Redirect
 *
 * ### RN
 * - if user role matches route role type, render component.
 * - if not redirected to another route.
 */

function PermissionRoute({
  role,
  element: Component,
}: TPermissionRoute): ReactElement {
  const { user } = useAuth();

  if (!role.includes(user.role)) {
    return <Navigate to="/404" replace />;
  }

  return <ProtectedRoute element={Component} />;
}

export { PermissionRoute };
