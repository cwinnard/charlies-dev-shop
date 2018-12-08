/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import InquiryForm from '../functional/InquiryForm';

class InquiryPage extends Component {
    render() {
        return (
            <div>
                <InquiryForm />
            </div>
        );
    }
}

export default InquiryPage;
