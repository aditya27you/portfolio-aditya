import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        // Assuming you have a function to send data to a server
        setSubmissionStatus('Sending...');
        try {
            // Here you would handle sending the data
            // await sendDataToServer(data);
            setSubmissionStatus('Success!');
        } catch (error) {
            setSubmissionStatus('Error submitting form.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    {...register('name', { required: true, maxLength: 30 })}
                />
                {errors.name && <span>This field is required.</span>}
            </div>
            
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required and must be a valid email.</span>}
            </div>
            
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    {...register('message', { required: true })}
                />
                {errors.message && <span>This field is required.</span>}
            </div>
            
            <button type="submit">Submit</button>
            {submissionStatus && <p>{submissionStatus}</p>}
        </form>
    );
};

export default ContactForm;
