export type TRole = 'admin' | 'worker' | 'manager';

export interface IAuth {
  name: string;
  email: string;
  role: TRole;
  isAuthenticated: boolean;
}

export interface ICredential {
  email: string;
  password?: string;
}
