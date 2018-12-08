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
import PropTypes from 'prop-types';


const NEW_INQUIRY_URL = 'https://charlie-system.herokuapp.com/inquiry/new';

let formData = {
    username: '',
    email: '',
    businessType: '',
    businessDescription: '',
    request: '',
    submitted: false,
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

const resetFormData = () => {
    formData = {
        username: '',
        email: '',
        businessType: '',
        businessDescription: '',
        request: '',
    };
    return formData;
};

const postForm = (action) => {
    axios.post(NEW_INQUIRY_URL, formData).then(() => {
        resetFormData();
        action();
    }, (e) => {
        console.log(e);
    });
};

const InquiryForm = ({ action }) => (
    <Card className="formCard">
        <div className="formHeader" />
        <CardContent>
            <form id="inqForm">
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
                    onClick={() => { postForm(action); }}
                >
                    Submit
                </Button>
            </form>
        </CardContent>
    </Card>
);

InquiryForm.propTypes = {
    action: PropTypes.func.isRequired,
};

export default InquiryForm;
