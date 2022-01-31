import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { IAuth, ICredential } from '~/models/Credentials';

interface IAuthContext {
  user: IAuth;
  isAuthenticated: boolean;
  signIn: (data: ICredential) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const PREFIX = '@MFE';
function AuthProvider({ children }: { children: ReactNode }): ReactElement {
  const [user, setUser] = useState<IAuth>(() => {
    const storagedUser = JSON.parse(localStorage.getItem(`${PREFIX}:user`));

    if (storagedUser) {
      return storagedUser as IAuth;
    }

    return {} as IAuth;
  });

  const signIn = ({ username }: ICredential) => {
    const data: IAuth = {
      username,
      name: 'user',
      isAuthenticated: true,
      role: 'admin',
    };

    setUser(data);
    localStorage.setItem(`${PREFIX}:user`, JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user.username, user, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
