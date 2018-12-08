import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';
import React from 'react';
import img from '../images/tennis.jpg';

const ProductCard = () => (
    <div>
        <Card className="card">
            <CardHeader
                title="Product Title"
            />
            <CardMedia
                image={img}
            />
            <CardContent>
                Tennis Lessons!
            </CardContent>
        </Card>
    </div>
);

export default ProductCard;
