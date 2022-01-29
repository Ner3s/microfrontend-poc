import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/styles/global';

import theme from './styles/theme';

import { HookProvider } from './hooks';
import Routes from './routes';
import store from './store';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HookProvider>
          <Routes />
          <GlobalStyles />
        </HookProvider>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
