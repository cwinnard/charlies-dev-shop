/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';

import DataTablePage from './components/stateful/DataTablePage';
import EmailSignupPage from './components/stateful/EmailSignupPage';
import InquiryPage from './components/stateful/InquiryPage';
import ProductPage from './components/stateful/ProductPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/ecommerce" component={ProductPage} />
                    <Route exact path="/inquiry" component={InquiryPage} />
                    <Route exact path="/email" component={EmailSignupPage} />
                    <Route exact path="/data" component={DataTablePage} />
                </Switch>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     const postForm = () => { dispatch(postForm()); };
//     return {
//         postForm,
//     };
// };

export default App;
