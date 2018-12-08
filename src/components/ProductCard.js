import {
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core';
import React from 'react';


const ProductCard = () => (
    <div>
        <Card className="card">
            <CardHeader
                title="Product Title"
            />
            <CardContent>
                Hello Product1
            </CardContent>
        </Card>
    </div>
);

export default ProductCard;
