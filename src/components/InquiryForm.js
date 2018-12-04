/* eslint react/prefer-stateless-function: 0 */

import axios from 'axios';
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

const NEW_INQUIRY_URL = 'https://www.herokuapp.charlie-system.com/inquiry/new';

const formData = {
    email: '',
    businessType: '',
    businessDescription: '',
    request: '',
};

const setData = (e) => {
    console.log(e);
    console.log(e.target);
    // formData[key] = value;
    console.log(formData);
};

const postForm = () => {
    axios.post(NEW_INQUIRY_URL, formData).then((res) => {
        console.log(res);
    }, (e) => {
        console.log(e);
    });
};

const InquiryForm = () => (
    <Card className="card">
        <CardContent>
            <form>
                <FormControl>
                    <TextField
                        label="email"
                        onChange={setData}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="businessType"
                        onChange={setData}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <br />
                    <TextField
                        label="businessDescription"
                        onChange={setData}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="request"
                        multiline
                        rowsMax="4"
                        onChange={setData}
                    />
                </FormControl>
                <br />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={postForm}
                >
                    Submit
                </Button>
            </form>
        </CardContent>
    </Card>
);

export default InquiryForm;
