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
        light: '#cbd4c2',
        main: '#006cb0',
        dark: '#006cb0',
        contrastText: '#50514f',
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
