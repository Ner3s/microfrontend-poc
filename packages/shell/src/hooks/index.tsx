import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { AvailableRoutesProvider } from './availableRoutes';

export function HookProvider({ children }: { children: ReactNode }) {
  return (
    <AvailableRoutesProvider>
      <AuthProvider>{children}</AuthProvider>
    </AvailableRoutesProvider>
  );
}
