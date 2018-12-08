import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';
import React from 'react';
import InquiryLink from './InquiryLink';
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
        <InquiryLink />
    </div>
);

export default ProductCard;
