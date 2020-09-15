import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Router, defaultTheme } from 'core';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Router />
      </CssBaseline>
    </ThemeProvider>
  );
};
