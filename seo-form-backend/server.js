const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000; // backend will run on localhost:5000

app.use(cors());
app.use(bodyParser.json());

// Create transporter for Zoho SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'no-reply@digitalxperts.in', // <<<<< your Zoho email here
    pass: '@Adm!n_2022',            // <<<<< your Zoho App Password here
  },
});

// Route to send email
app.post('/send-email', async (req, res) => {
  const { fullName, mobileNumber, email, website, keywordPlan, description } = req.body;

  try {
    await transporter.sendMail({
      from: '"SEO Form" <no-reply@digitalxperts.in>',
      to: 'kaushalthakur2005@gmail.com', // you can add multiple emails too
      subject: 'New SEO Audit Form Submission',
      html: `
        <h2>New SEO Audit Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Keyword Plan:</strong> ${keywordPlan}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
