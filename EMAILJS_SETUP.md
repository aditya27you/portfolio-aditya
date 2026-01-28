# EmailJS Setup Instructions

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to set up your EmailJS account and configure the contact form.

## Prerequisites
- An EmailJS account (free tier available)

## Setup Steps

### 1. Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the provider-specific instructions to connect your email
5. Copy your **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body
   - `{{to_name}}` - Your name (recipient)

Example template:
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., `abc123XYZ456`)

### 5. Configure Environment Variables
1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Test the Contact Form
1. Run the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the test message

## Troubleshooting

### Form submission fails
- Verify all environment variables are set correctly
- Check the browser console for error messages
- Ensure your EmailJS account is verified and active
- Check that your service and template IDs are correct

### Emails not received
- Check your email spam/junk folder
- Verify the template variables are correctly mapped
- Ensure your email service is properly connected in EmailJS

### Rate limiting
- EmailJS free tier has a monthly limit (200 emails/month)
- Consider upgrading if you exceed this limit

## Additional Resources
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Integration Guide](https://www.emailjs.com/docs/examples/reactjs/)
