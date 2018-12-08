import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';
import React from 'react';
import img from '../../images/tennis.jpg';

const imgStyle = { height: '200px', width: '90%', margin: '0 auto' };

const ProductCard = () => (
    <div>
        <Card className="card">
            <CardHeader
                title="Product Title"
            />
            <CardMedia
                image={img}
                style={imgStyle}
            />
            <CardContent>
                Tennis Lessons!
            </CardContent>
        </Card>
    </div>
);

export default ProductCard;
