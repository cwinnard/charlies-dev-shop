import React from 'react';

const InquiryForm = () => (
    <div className="InquiryForm">
        <form action="https://charlie-system.herokuapp.com" method="post">
            <h4> Please describe your request </h4>
            <label htmlFor="email">
                Email*:
                <input type="email" name="email" required />
            </label>
            <br />
            <label htmlFor="businessType">
                Business Type:
                <input type="text" name="businessType" />
            </label>
            <br />
            <label htmlFor="businessDescription">
                Business Description*:
                <input type="text" name="businessDescription" required />
            </label>
            <br />
            <label htmlFor="request">
                Describe your app request*:
                <input type="text" name="request" required />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
);

export default InquiryForm;
