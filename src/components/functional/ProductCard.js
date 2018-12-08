import {
    Button,
    Card,
    CardActions,
    CardActionArea,
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
            <CardActionArea>
                <CardHeader
                    title={product.title}
                />
                <CardMedia
                    image={product.img}
                    style={imgStyle}
                />
                <CardContent>
                    {product.point1}
                    <br />
                    {product.point2}
                    <br />
                    {product.point3}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">
                    Learn More
                </Button>
                <Button size="small">
                    Buy know
                </Button>
            </CardActions>
        </Card>
    </div>
);

ProductCard.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        point1: PropTypes.string,
        point2: PropTypes.string,
        point3: PropTypes.string,
    }).isRequired,
};

export default ProductCard;
