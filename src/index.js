/* eslint-disable */

import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = {};
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
    <Provider store={store}>
        <MuiThemeProvider theme={theme} >
            <App />
            </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
