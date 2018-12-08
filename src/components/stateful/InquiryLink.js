/* eslint react/prefer-stateless-function: 0 */

import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class InquiryLink extends Component {
    render() {
        return (
            <h5>
                <Link to="/inquiry">
                    Like what you see?  Request an MVP
                </Link>
            </h5>
        );
    }
}

export default InquiryLink;
