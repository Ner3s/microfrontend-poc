import React, {
  createContext,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
} from 'react';

import { IRouteNavbar } from '~/models/Route';

interface IAvailableRoutesContext {
  routesAvailable: IRouteNavbar[];
  setRoutesAvailable: Dispatch<SetStateAction<IRouteNavbar[]>>;
}

const AvailableRoutesContext = createContext<IAvailableRoutesContext>(
  {} as IAvailableRoutesContext,
);

function AvailableRoutesProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [routesAvailable, setRoutesAvailable] = useState<IRouteNavbar[]>(null);

  return (
    <AvailableRoutesContext.Provider
      value={{ routesAvailable, setRoutesAvailable }}
    >
      {children}
    </AvailableRoutesContext.Provider>
  );
}

function useAvailableRoutes(): IAvailableRoutesContext {
  const context = useContext(AvailableRoutesContext);

  if (!context) {
    throw new Error(
      'useAvailableRoutes must be used within an AvailableRoutesProvider',
    );
  }

  return context;
}

export { useAvailableRoutes, AvailableRoutesProvider };
