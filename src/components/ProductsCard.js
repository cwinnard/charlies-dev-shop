import {
    Card,
    CardContent,
} from '@material-ui/core';
import React from 'react';


const ProductsCard = () => (
    <div>
        <Card className="card">
            <CardContent>
                Hello Product1
            </CardContent>
        </Card>
        <Card className="card">
            <CardContent>
                Hello Product2
            </CardContent>
        </Card>
        <Card className="card">
            <CardContent>
                Hello Product3
            </CardContent>
        </Card>
    </div>
);

export default ProductsCard;
