import {
    Button,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import React from 'react';
import PropTypes from 'prop-types';

const imgStyle = { height: '200px', width: '90%', margin: '0 auto' };

const ProductCard = ({ product }) => (
    <div>
        <Card className="card">
            <CardActionArea className="productMain">
                <CardHeader
                    title={product.title}
                />
                <CardMedia
                    image={product.img}
                    style={imgStyle}
                />
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point1} />
                        </ListItem>
                        <br />
                        <ListItem>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point2} />
                        </ListItem>
                        <br />
                        <ListItem>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point3} />
                        </ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Button size="small" color="primary">
                    Buy Now
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
