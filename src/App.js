/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import './App.css';

import InquiryForm from './components/InquiryForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                Hello app
                <InquiryForm />
            </div>
        );
    }
}

export default App;
