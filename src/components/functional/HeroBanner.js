import PropTypes from 'prop-types';
import React from 'react';

const HeroBanner = ({ image, alt }) => (
    <div className="heroBanner">
        <img className="heroImg" src={image} alt={alt} />
    </div>
);

HeroBanner.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default HeroBanner;
