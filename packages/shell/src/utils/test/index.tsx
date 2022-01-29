import React, { ReactElement } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';

const customRender = (component: ReactElement): RenderResult => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
};

export { customRender as render };
