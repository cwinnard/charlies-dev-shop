/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

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
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <InquiryLink />
            </div>
        );
    }
}

export default ProductPage;
