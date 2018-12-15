/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

const gridStyles = {
    margin: '0 auto',
};

class ProductPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="productCardMain">
                    <HeroBanner image={heroImg} alt="computer closeup" />
                    <Grid container style={classes} spacing={24}>
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
            </div>
        );
    }
}

ProductPage.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

export default withStyles(gridStyles)(ProductPage);
