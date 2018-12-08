import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const imgStyle = { height: '200px', width: '90%', margin: '0 auto' };

const ProductCard = ({ product }) => (
    <div>
        <Card className="card">
            <CardHeader
                title={product.title}
            />
            <CardMedia
                image={product.img}
                style={imgStyle}
            />
            <CardContent>
                Experienced: 30 years of forehand experience
                Ambidextrious: Learn the right hand or left
                Expensive: So you know you gettin hot shit
            </CardContent>
        </Card>
    </div>
);

ProductCard.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
