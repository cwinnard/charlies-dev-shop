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


const NEW_INQUIRY_URL = 'https://charlie-system.herokuapp.com/inquiry/new';

const formData = {
    email: '',
    businessType: '',
    businessDescription: '',
    request: '',
};

const setEmail = (e) => {
    formData.email = e.target.value;
};

const setBusinessType = (e) => {
    formData.businessType = e.target.value;
};

const setBusinessDescription = (e) => {
    formData.businessDescription = e.target.value;
};

const setRequest = (e) => {
    formData.request = e.target.value;
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
        <div className="formHeader" />
        <CardContent>
            <form>
                <h3>
                    Request an MVP
                </h3>
                <FormControl>
                    <TextField
                        label="email"
                        onChange={setEmail}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="businessType"
                        onChange={setBusinessType}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <br />
                    <TextField
                        label="businessDescription"
                        onChange={setBusinessDescription}
                    />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField
                        label="request"
                        multiline
                        rowsMax="4"
                        onChange={setRequest}
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
