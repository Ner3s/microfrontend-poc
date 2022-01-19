import { sizes } from './sizes';

const light = {
  colors: {
    light: '#FFFFFF',
    dark: '#000000',
    primary: '#76C893',
    secondary: '#1E6091',

    lightgrey: '#DDDDDD',
    darkgrey: '#505050',

    ice: '#FAFAFA',
    red: '#E76E61',
    yellow: '#EFCB68',
    background: '#E9EBF1',
  },
  ...sizes,
} as const;

export default light;
