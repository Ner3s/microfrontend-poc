export type TRole = 'admin' | 'worker' | 'manager';

export interface IAuth {
  name: string;
  username: string;
  role: TRole;
  isAuthenticated: boolean;
}

export interface ICredential {
  username: string;
  password?: string;
}
