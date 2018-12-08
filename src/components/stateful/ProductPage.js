/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import InquiryLink from './InquiryLink';
import ProductCard from '../functional/ProductCard';

import img from '../../images/tennis.jpg';

const title = 'Tennis Lessons';
const product = {
    img,
    title,
    point1: 'Experienced: Played when the game was invented',
    point2: 'Experienced: Played when the game was invented',
    point3: 'Experienced: Played when the game was invented',
};

class ProductPage extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product} />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <InquiryLink />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ProductPage;
