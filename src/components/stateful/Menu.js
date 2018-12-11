/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { MenuItem, MenuList } from '@material-ui/core';
import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <MenuList>
                <MenuItem>
                    eCommerce mvp
                </MenuItem>
                <MenuItem>
                    email signup mvp
                </MenuItem>
                <MenuItem>
                    data table mvp
                </MenuItem>
                <MenuItem>
                    request your mvp
                </MenuItem>
            </MenuList>
        );
    }
}

export default Menu;
