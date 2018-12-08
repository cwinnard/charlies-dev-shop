import {
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core';
import React from 'react';


const ProductCard = () => (
    <div>
        <Card className="card">
            <CardHeader>
                Product Title
            </CardHeader>
            <CardContent>
                Hello Product1
            </CardContent>
        </Card>
    </div>
);

export default ProductCard;
