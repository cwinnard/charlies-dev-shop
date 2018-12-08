/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import {
    AppBar,
    Button,
    Grid,
    Toolbar,
} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import InquiryPage from './components/stateful/InquiryPage';
import ProductPage from './components/stateful/ProductPage';

const SHOPNAME = 'Charlie\'s Dev Shop';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar className="header" position="static" color="primary">
                    <Toolbar className="buttonBar">
                        <Grid container spacing={24}>
                            <Grid item sm={3} xs={2}>
                                <div className="shopName">
                                    {SHOPNAME}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item sm={8} xs={10}>
                                <Button size="small" color="inherit">
                                    eCommerce mvp
                                </Button>
                                <Button size="small" color="inherit">
                                    email signup mvp
                                </Button>
                                <Button size="small" color="inherit">
                                    data table mvp
                                </Button>
                                <Button size="small" color="inherit">
                                    request your mvp
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={ProductPage} />
                    <Route exact path="/inquiry" component={InquiryPage} />
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
