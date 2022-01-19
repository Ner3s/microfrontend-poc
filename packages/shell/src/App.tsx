import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/styles/global';

import theme from './styles/theme';

import Routes from './routes';
import store from './store';
// const Header = React.lazy(() => import('dashboard/Header').then(module => ({ default: module.Header })));

function App(): ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
