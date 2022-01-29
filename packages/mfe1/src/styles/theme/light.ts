import { sizes } from './sizes';

const light = {
  colors: {
    light: '#FFFFFF',
    dark: '#000000',
    primary: '#76C893',
    secondary: '#1E6091',
    lightgrey: '#DDDDDD',
    darkgrey: '#707072',
    ice: '#FAFAFA',
    red: '#E76E61',
    yellow: '#EFCB68',
    background: '#201a28',
  },
  ...sizes,
} as const;

export default light;
