/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import InquiryLink from './InquiryLink';
import ProductCard from '../functional/ProductCard';
import tennisImg from '../../images/tennis.jpg';
import benchImg from '../../images/bench.jpg';
import pastaImg from '../../images/pasta.jpg';

const product1 = {
    title: 'Tennis Lessons',
    img: tennisImg,
    point1: 'Experienced: Played when the game was invented',
    point2: 'Ambidextrous: So you\'ll get the right (or left) instruction',
    point3: 'Expensive: So you know it\'s good',
};
const product2 = {
    title: 'Homemade Bench',
    img: benchImg,
    point1: 'Handmade: By my grandfather',
    point2: 'Good Wood: From the forest',
    point3: 'Scenery: Not Included',
};
const product3 = {
    title: 'Tasty Pasta',
    img: pastaImg,
    point1: 'Noodles: The best part of the dish',
    point2: 'Sauce: For the flavor',
    point3: 'Plate: To keep you clean',
};

class ProductPage extends Component {
    render() {
        return (
            <div>
                <Grid container className="productsContainer" spacing={24}>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product1} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product2} />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ProductCard product={product3} />
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
