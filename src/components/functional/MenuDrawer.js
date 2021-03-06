import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import Assessment from '@material-ui/icons/Assessment';
import Code from '@material-ui/icons/Code';
import DollarSign from '@material-ui/icons/AttachMoney';
import Mail from '@material-ui/icons/Mail';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const MenuDrawer = ({ open, onClose }) => (
    <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        variant="temporary"
    >
        <h5> Sample App Menu </h5>
        <Divider />
        <List>
            <Link to="/ecommerce">
                <ListItem button>
                    <ListItemIcon>
                        <DollarSign />
                    </ListItemIcon>
                    <ListItemText primary="eCommerce" />
                </ListItem>
            </Link>
            <Link to="/email">
                <ListItem button>
                    <ListItemIcon>
                        <Mail />
                    </ListItemIcon>
                    <ListItemText primary="email" />
                </ListItem>
            </Link>
            <Link to="/data">
                <ListItem button>
                    <ListItemIcon>
                        <Assessment />
                    </ListItemIcon>
                    <ListItemText primary="data" />
                </ListItem>
            </Link>
            <Link to="/inquiry">
                <ListItem button>
                    <ListItemIcon>
                        <Code />
                    </ListItemIcon>
                    <ListItemText primary="request yours" />
                </ListItem>
            </Link>
        </List>
    </Drawer>
);

MenuDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default MenuDrawer;
