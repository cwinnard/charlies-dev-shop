/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';

import MenuBar from './components/functional/MenuBar';
import DataTablePage from './components/stateful/DataTablePage';
import EmailSignupPage from './components/stateful/EmailSignupPage';
import InquiryPage from './components/stateful/InquiryPage';
import LandingPage from './components/stateful/LandingPage';
import ProductPage from './components/stateful/ProductPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/ecommerce" component={ProductPage} />
                    <Route exact path="/inquiry" component={InquiryPage} />
                    <Route exact path="/email" component={EmailSignupPage} />
                    <Route exact path="/data" component={DataTablePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
