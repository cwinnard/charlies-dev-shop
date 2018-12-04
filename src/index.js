/* eslint-disable */

import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const theme = createMuiTheme({palette:
    {
      primary: {
        light: 'white',
        main: 'red',
        dark: 'black',
        contrastText: 'purple',
      },
      secondary: {
        light: 'white',
        main: 'red',
        dark: 'black',
        contrastText: 'purple',
      },
      error: {
        light: 'white',
        main: 'red',
        dark: 'black',
        contrastText: 'purple',
      },
  }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme} >
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
