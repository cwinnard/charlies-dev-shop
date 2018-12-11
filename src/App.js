/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import DataTablePage from './components/stateful/DataTablePage';
import EmailSignupPage from './components/stateful/EmailSignupPage';
import InquiryPage from './components/stateful/InquiryPage';
import Menu from './components/functional/Menu';
import ProductPage from './components/stateful/ProductPage';

const SHOPNAME = 'Charlie\'s Dev Shop';

class App extends Component {
    state = {
        menuOpen: false,
        toggleMenu: display => this.setState({ menuOpen: display }),
    }

    render() {
        const { menuOpen, toggleMenu } = this.state;
        return (
            <div className="App">
                <AppBar className="header" position="static" color="primary">
                    <div className="menu">
                        <MenuIcon onClick={toggleMenu(false)} />
                        <Menu
                            open={menuOpen}
                            onClose={toggleMenu(true)}
                        />
                    </div>
                    <div className="shopName">
                        {SHOPNAME}
                    </div>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={ProductPage} />
                    <Route exact path="/inquiry" component={InquiryPage} />
                    <Route exact path="/email" component={EmailSignupPage} />
                    <Route exact path="/data" component={DataTablePage} />
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
