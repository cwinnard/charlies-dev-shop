/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import SignupForm from '../functional/SignupForm';

class LandingPage extends Component {
    render() {
        return (
            <div>
                Hello Landing
                <SignupForm />
            </div>
        );
    }
}

export default LandingPage;
