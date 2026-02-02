// Updated ContactForm.tsx with fixed syntax issues
import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <input type="submit" value="Submit" />
        </form>
    );
};

export default ContactForm;