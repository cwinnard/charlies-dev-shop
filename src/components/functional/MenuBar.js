import { AppBar, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const SHOPNAME = 'Charlie\'s Dev Shop';

const MenuBar = ({ menuOpen, toggleMenu }) => (
    <AppBar className="header" position="static" color="primary">
        <div className="menuContainer">
            <div className="menu">
                <MenuIcon onClick={() => { toggleMenu(true); }} />
                <Menu
                    open={menuOpen}
                    onClose={() => { toggleMenu(false); }}
                />
            </div>
            <div className="shopName">
                {SHOPNAME}
            </div>
        </div>
    </AppBar>
);

MenuBar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

// state = {
//     menuOpen: false,
//     toggleMenu: display => this.setState({ menuOpen: display }),
// }


export default MenuBar;
