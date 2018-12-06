/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { AppBar } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import InquiryForm from './components/InquiryForm';
import ProductsCard from './components/ProductsCard';

class App extends Component {
    render() {
        const name = 'charlie\'s dev shop';
        return (
            <div className="App">
                <AppBar className="header" position="static" color="primary">
                    {name}
                </AppBar>
                <Switch>
                    <Route path="/" componrnt={ProductsCard} />
                    <Route path="/inquiry" componrnt={InquiryForm} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { loaded } = state;
    const { panel } = state;
    return {
        loaded,
        panel,
    };
};

const mapDispatchToProps = (dispatch) => {
    const postForm = () => { dispatch(postForm()); };
    return {
        postForm,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
