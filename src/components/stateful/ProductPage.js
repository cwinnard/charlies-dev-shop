/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import InquiryLink from '../functional/InquiryLink';
import ProductCard from '../functional/ProductCard';

class ProductPage extends Component {
    render() {
        return (
            <div>
                hello thin2
                <ProductCard />
                <InquiryLink />
            </div>
        );
    }
}

export default ProductPage;
