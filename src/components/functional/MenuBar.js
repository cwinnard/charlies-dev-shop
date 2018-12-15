import { AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MenuDrawer from './MenuSlider';
import toggleMenu from '../../redux/actions/menuActions';

const SHOPNAME = 'Charlie\'s Dev Shop';

const MenuBar = ({ menuVisible, toggle }) => (
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
);

MenuBar.propTypes = {
    menuVisible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const { menuVisible } = state.app;
    return {
        menuVisible,
    };
};

const mapDispatchToProps = dispatch => (
    {
        toggle: () => { dispatch(toggleMenu()); },
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
