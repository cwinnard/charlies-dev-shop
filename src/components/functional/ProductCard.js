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

const headerStyle = { fontSize: '1.1em' };
const imgStyle = { height: '140px', width: '90%', margin: '0 auto' };
const listAreaStyle = { paddingTop: '0', paddingBottom: '0' };
const listItemStyle = { paddingTop: '0px', paddingBottom: '0px' };
const listItemTextStyle = { fontSize: '0.8rem', padding: '0' };

const ProductCard = ({ product }) => (
    <div>
        <Card className="card">
            <CardActionArea className="productMain">
                <CardHeader
                    title={product.title}
                    style={headerStyle}
                />
                <CardMedia
                    image={product.img}
                    style={imgStyle}
                />
                <CardContent className="pointsList" style={listAreaStyle}>
                    <List>
                        <ListItem style={listItemStyle}>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point1} style={listItemTextStyle} />
                        </ListItem>
                        <ListItem style={listItemStyle}>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point2} style={listItemTextStyle} />
                        </ListItem>
                        <ListItem style={listItemStyle}>
                            <ListItemIcon>
                                <Check />
                            </ListItemIcon>
                            <ListItemText primary={product.point3} style={listItemTextStyle} />
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
