/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        const { menuOpen, toggleMenu } = this.props;
        console.log(toggleMenu);
        return (
            <div>
                <MenuBar menuOpen={menuOpen} onClose={toggleMenu} />
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

ProductPage.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    console.log(state);
    const { menuOpen, toggleMenu } = state;
    return {
        menuOpen,
        toggleMenu,
    };
};

export default connect(mapStateToProps, null)(ProductPage);
