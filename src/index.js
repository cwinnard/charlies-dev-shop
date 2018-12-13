/* eslint-disable */

import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import initStore from './redux/initStore';

const store = initStore();
const theme = createMuiTheme({palette:
    {
      primary: {
        light: '#fff8e8',
        main: '#d52941',
        dark: '#006cb0',
        contrastText: '#ffffff',
      },
  }
})

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
