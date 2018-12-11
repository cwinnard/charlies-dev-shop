import { Drawer } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Menu = ({ open, onClose }) => (
    <Drawer
        anchor="left"
        onClose={onClose}
        open={open}
        variant="temporary"
    >
        <Link to="/ecommerce">
            eCommerce mvp
        </Link>
        <Link to="/email">
            email signup mvp
        </Link>
        <Link to="/data">
            data table mvp
        </Link>
        <Link to="/inquiry">
            request your mvp
        </Link>
    </Drawer>
);

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default Menu;
