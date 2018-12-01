import React from 'react';

const InquiryForm = () => (
    <div className="InquiryForm">
        <form action="https://charlie-system.herokuapp.com" method="post">
            <label htmlFor="email">
                Email:
                <input type="email" name="email" required />
            </label>
            <label htmlFor="businessType">
                Business Type:
                <input type="text" name="businessType" />
            </label>
            <label htmlFor="businessDescription">
                Business Description:
                <input type="text" name="businessDescription" required />
            </label>
            <label htmlFor="request">
                Describe your app request:
                <input type="text" name="request" required />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
);

export default InquiryForm;
