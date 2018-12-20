/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import MenuDrawer from './components/functional/MenuDrawer';
import DataTablePage from './components/stateful/DataTablePage';
import EmailSignupPage from './components/stateful/EmailSignupPage';
import FormContainer from './components/stateful/FormContainer';
import InquiryPage from './components/stateful/InquiryPage';
import LandingPage from './components/stateful/LandingPage';
import ProductPage from './components/stateful/ProductPage';
import toggleMenu from './redux/actions/menuActions';

const SHOPNAME = 'Charlie\'s Dev Shop';

class App extends Component {
    render() {
        const { menuVisible, toggle } = this.props;
        return (
            <div className="App">
                <AppBar className="header" position="static" color="primary">
                    <div className="menuContainer">
                        <div className="menu">
                            <MenuIcon onClick={toggle} />
                            <MenuDrawer
                                open={menuVisible}
                                onClose={toggle}
                            />
                        </div>
                        <div className="shopName">
                            {SHOPNAME}
                        </div>
                    </div>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={FormContainer} />
                    <Route exact path="/ecommerce" component={ProductPage} />
                    <Route exact path="/inquiry" component={InquiryPage} />
                    <Route exact path="/email" component={EmailSignupPage} />
                    <Route exact path="/data" component={DataTablePage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const { menuVisible } = state.app;
    console.log(menuVisible);
    return {
        menuVisible,
    };
};

const mapDispatchToProps = dispatch => (
    {
        toggle: () => { dispatch(toggleMenu()); },
    }
);

App.propTypes = {
    menuVisible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
