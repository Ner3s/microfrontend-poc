import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/styles/global';

import theme from './styles/theme';

import Routes from './routes';

const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyles />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
