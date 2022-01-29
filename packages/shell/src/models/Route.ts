import { RouteObject } from 'react-router-dom';

type TMfes = 'mfe1' | 'mfe2';

export interface IRouteNavbar {
  path: string;
  icon: any;
}

export interface IRouteModuleFederation {
  module: TMfes;
  routes: RouteObject;
}
