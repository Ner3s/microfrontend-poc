import { IRoutes } from './../models/Common';
import { lazy } from 'react';
import { sharedModuleRoutes } from './sharedModuleRoutes';

const Home = lazy(() => import('~/pages/Home').then(container => ({ default: container.Home })));

const routes: IRoutes[] = [
  {
    path: '/',
    element: Home
  }
]

Object.entries(sharedModuleRoutes).map(([key, module])=>{
  try {
    const {routes: importedRoutes } = module() as {
      routes: IRoutes[];
    }

    routes.push(...importedRoutes);
  } catch (error) {
    console.warn(`Não foi possível importar as rotas do módulo: ${key}`);
  }
})

export { routes };
