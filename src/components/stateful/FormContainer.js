/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';

import RForm from '../functional/RForm';

class FormContainer extends Component {
    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div>
                <RForm handleSubmit={this.submit} />
            </div>
        );
    }
}

export default FormContainer;
