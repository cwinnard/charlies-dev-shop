/* eslint react/prefer-stateless-function: 0 */

// import axios from 'axios';
import { FormControl, InputLabel, TextField } from '@material-ui/core';
import React from 'react';

// handleSubmit = (event) => {
//     axios.post('https://charlie-system.herokuapp.com/inquiry/new', {}).then(() => {
//         console.log('success');
//     }, (e) => {
//         console.log(e);
//     });
// }

const InquiryForm = () => (
    <FormControl>
        <InputLabel htmlfor="request">
            MVP Request
        </InputLabel>
        <TextField
            label="testing"
            value="terteroni"
        />
    </FormControl>
    // <div className="InquiryForm">
    //     <form onSubmit={onSubmit()}>
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
