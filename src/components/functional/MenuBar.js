import { AppBar, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const SHOPNAME = 'Charlie\'s Dev Shop';

const MenuBar = ({ menuVisable, toggleMenu }) => (
    <AppBar className="header" position="static" color="primary">
        <div className="menuContainer">
            <div className="menu">
                <MenuIcon onClick={toggleMenu} />
                <Menu
                    open={menuVisable}
                    onClose={toggleMenu}
                />
            </div>
            <div className="shopName">
                {SHOPNAME}
            </div>
        </div>
    </AppBar>
);

MenuBar.propTypes = {
    menuVisable: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default MenuBar;
