import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/styles/global';

import theme from './styles/theme';

import Routes from './routes';
import { Provider } from 'react-redux';
import store from '~/store';
import ErrorBoundary from './components/errorBondaries';

const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Provider>
    <GlobalStyles />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
