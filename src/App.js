/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { AppBar } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import InquiryForm from './components/InquiryForm';

class App extends Component {
    render() {
        const name = 'charlie\'s dev shop';
        return (
            <div className="App">
                <AppBar className="header" position="static" color="default">
                    {name}
                </AppBar>
                <InquiryForm />
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
