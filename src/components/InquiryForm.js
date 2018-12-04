/* eslint react/prefer-stateless-function: 0 */

// import axios from 'axios';
import {
    Button,
    Card,
    CardContent,
    FormControl,
    TextField,
} from '@material-ui/core';
import React from 'react';

// handleSubmit = (event) => {
//     axios.post('https://charlie-system.herokuapp.com/inquiry/new', {}).then(() => {
//         console.log('success');
//     }, (e) => {
//         console.log(e);
//     });
// }

const InquiryForm = () => (
    <Card>
        <CardContent>
            <form>
                <FormControl>
                    <TextField
                        label="email"
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="businessType"
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <br />
                    <TextField
                        label="businessDescription"
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="request"
                        multiline
                        rowsMax="4"
                    />
                </FormControl>
                <br />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                >
                    Submit
                </Button>
            </form>
        </CardContent>
    </Card>
);

export default InquiryForm;
