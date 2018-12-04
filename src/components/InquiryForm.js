/* eslint react/prefer-stateless-function: 0 */

// import axios from 'axios';
import {
    Button,
    FormControl,
    InputLabel,
    TextField
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
    <form>
        <FormControl>
            <InputLabel htmlfor="request">
                MVP Request
            </InputLabel>
            <br />
            <TextField
                label="testing"
                value=""
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <InputLabel htmlfor="email">
                email
            </InputLabel>
            <br />
            <TextField
                label="email"
                value=""
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <InputLabel htmlfor="businessType">
                businessType
            </InputLabel>
            <br />
            <TextField
                label="businessType"
                value=""
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <InputLabel htmlfor="businessDescription">
                businessDescription
            </InputLabel>
            <br />
            <TextField
                label="businessDescription"
                value=""
            />
        </FormControl>
        <Button
            color="contrastText"
            variant="contained"
            size="large"
        >
            Submit
        </Button>
    </form>
    // <div className="InquiryForm">
    //
    //         <h4> Please describe your request </h4>
    //         <label htmlFor="email">
    //             Email*:
    //             <input type="email" name="email" required />
    //         </label>
    //         <br />
    //         <label htmlFor="businessType">
    //             Business Type*:
    //             <input type="text" name="businessType" required />
    //         </label>
    //         <br />
    //         <label htmlFor="businessDescription">
    //             Business Description:
    //             <input type="text" name="businessDescription" />
    //         </label>
    //         <br />
    //         <label htmlFor="request">
    //             Describe your app request*:
    //             <input type="text" name="request" required />
    //         </label>
    //         <br />
    //         <input type="submit" value="Submit" />
    //     </form>
    // </div>
);
    // }
// }

export default InquiryForm;
