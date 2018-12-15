import {
    Button,
    Card,
    CardContent,
    FormControl,
    TextField,
} from '@material-ui/core';
import React from 'react';

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
                >
                    Start
                </Button>
            </form>
        </CardContent>
    </Card>
);


export default SignupForm;
