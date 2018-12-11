/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { MenuItem, MenuList } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <MenuList>
                <MenuItem>
                    <Link to="/ecommerce">
                        eCommerce mvp
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/email">
                        email signup mvp
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/data">
                        data table mvp
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/inquiry">
                        request your mvp
                    </Link>
                </MenuItem>
            </MenuList>
        );
    }
}

export default Menu;
