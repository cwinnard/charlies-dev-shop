/* eslint import/no-mutable-exports: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/label-has-for: 0 */

import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h3>
                Request an MVP
            </h3>

            <div>
                <label id="testId" htmlFor="testField">Test Field</label>
                <Field name="testField" component="input" type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

const createForm = reduxForm({
    form: 'test',
});

RForm = createForm(RForm);

RForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default RForm;
