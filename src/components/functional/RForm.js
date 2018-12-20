/* eslint import/no-mutable-exports: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/label-has-for: 0 */

import { Button } from '@material-ui/core';
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

            <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {}}
            >
                Submit
            </Button>
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
