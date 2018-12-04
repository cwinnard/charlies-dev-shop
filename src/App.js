/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import InquiryForm from './components/InquiryForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                {this.loaded}
                <InquiryForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { loaded } = state;
    return {
        loaded,
    };
};

export default connect(mapStateToProps, null)(App);
