import { MdHome } from 'react-icons/md';

import { IRouteNavbar } from '~/models/Route';

const modulesLoader = {
  mfe1: () => require('mfe1/NavLink'),
  mfe2: () => require('mfe2/NavLink'),
};

const routesMock: IRouteNavbar[] = [{ icon: MdHome, path: '/' }];

Object.entries(modulesLoader).map(([key, module]) => {
  try {
    const { navLink } = module();
    routesMock.push(navLink);
  } catch (error) {
    console.warn('Unable to import ', key);
  }
});

export { routesMock };
