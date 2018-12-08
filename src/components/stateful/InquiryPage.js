/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import InquiryForm from '../functional/InquiryForm';
import InquiryThankYou from '../functional/InquiryThankYou';

class InquiryPage extends Component {
    state = {
        submitted: false,
    };

    handleSubmit = () => {
        this.setState({ submitted: true });
    }

    render() {
        const { handleSubmit, submitted } = this.state;
        return (
            <div>
                {!submitted
                    ? <InquiryForm action={handleSubmit} />
                    : <InquiryThankYou />
                }
            </div>
        );
    }
}

export default InquiryPage;
