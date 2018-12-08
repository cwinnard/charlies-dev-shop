import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';
import React from 'react';


const ProductCard = () => (
    <div>
        <Card className="card">
            <CardHeader
                title="Product Title"
            />
            <CardMedia
                image="/public/productImages/tennis.jpg"
            />
            <CardContent>
                Tennis Lessons!
            </CardContent>
        </Card>
    </div>
);

export default ProductCard;
