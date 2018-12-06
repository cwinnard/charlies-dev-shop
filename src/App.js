/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import {
    AppBar,
    IconButton,
    Menu,
    MenuIcon,
    MenuItem,
    Toolbar,
} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import InquiryForm from './components/InquiryForm';
import ProductsCard from './components/ProductsCard';

class App extends Component {
    render() {
        // const name = 'charlie\'s dev shop';
        return (
            <div className="App">
                <AppBar className="header" position="static" color="primary">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Menu>
                            <MenuItem>
                                Here be menu MenuItem
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={ProductsCard} />
                    <Route path="/inquiry" component={InquiryForm} />
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
