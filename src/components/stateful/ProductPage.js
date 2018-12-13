/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import MenuBar from '../functional/MenuBar';
import HeroBanner from '../functional/HeroBanner';
import heroImg from '../../images/hero.png';

import ProductCard from '../functional/ProductCard';
import tennisImg from '../../images/tennis.jpg';
import benchImg from '../../images/bench.jpg';
import pastaImg from '../../images/pasta.jpg';

const product1 = {
    title: 'Tennis Lessons',
    img: tennisImg,
    point1: '$30 an hour',
    point2: 'B.Y.O.Balls',
    point3: 'Head raquets only',
};
const product2 = {
    title: 'Homemade Bench',
    img: benchImg,
    point1: 'Petrified wood',
    point2: 'Very sturdy',
    point3: '10 year return policy',
};
const product3 = {
    title: 'Tasty Pasta',
    img: pastaImg,
    point1: 'Non-gluten-free',
    point2: 'Limited time only',
    point3: '3 sauce varieties!',
};

class ProductPage extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                <HeroBanner image={heroImg} alt="computer closeup" />
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
                </Grid>
            </div>
        );
    }
}

export default ProductPage;
