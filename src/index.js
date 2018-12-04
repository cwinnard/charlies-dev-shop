/* eslint-disable */

import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import appReducer from './reducers/appReducer';

const store = createStore(appReducer);
const theme = createMuiTheme({palette:
    {
      primary: {
        light: 'white',
        main: 'red',
        dark: 'required',
        contrastText: 'purple',
      },
      secondary: {
        light: 'white',
        main: 'red',
        dark: 'red',
        contrastText: 'purple',
      },
      error: {
        light: 'white',
        main: 'red',
        dark: 'red',
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
