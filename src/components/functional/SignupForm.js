import axios from 'axios';
import {
    Button,
    Card,
    CardContent,
    FormControl,
    TextField,
} from '@material-ui/core';
import React from 'react';

const NEW_USER_URL = 'https://charlie-system.herokuapp.com/users/new';

const postForm = () => {
    axios.post(NEW_USER_URL, {});
};

const SignupForm = () => (
    <Card>
        <CardContent>
            <form>
                <FormControl>
                    <TextField
                        label="username"
                    />
                </FormControl>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={postForm}
                >
                    Start
                </Button>
            </form>
        </CardContent>
    </Card>
);


export default SignupForm;
