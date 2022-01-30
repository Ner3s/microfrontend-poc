import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';

export function HookProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
