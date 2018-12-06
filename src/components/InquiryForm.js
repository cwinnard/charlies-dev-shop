/* eslint react/prefer-stateless-function: 0 */

import axios from 'axios';
import {
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    TextField,
} from '@material-ui/core';
import React from 'react';


const NEW_INQUIRY_URL = 'https://charlie-system.herokuapp.com/inquiry/new';

const formData = {
    username: '',
    email: '',
    businessType: '',
    businessDescription: '',
    request: '',
};

const setUsername = (e) => {
    formData.username = e.target.value;
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
                <Grid container spacing={24}>
                    <Grid item sm={6} xs={12}>
                        <FormControl>
                            <TextField
                                label="username"
                                onChange={setUsername}
                            />
                        </FormControl>
                        <br />
                        <br />
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
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <FormControl>
                            <br />
                            <TextField
                                label="businessDescription"
                                multiline
                                rows="3"
                                rowsMax="6"
                                onChange={setBusinessDescription}
                                style={{ top: '-21px' }}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <TextField
                                label="request"
                                multiline
                                rows="3"
                                rowsMax="6"
                                onChange={setRequest}
                                style={{ top: '-29px' }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
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
