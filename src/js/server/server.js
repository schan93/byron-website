const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const { google } = require("googleapis");

app.use(cors());
app.use(bodyParser.json());
// serve static files of our react app
app.use(express.static(path.join(__dirname, '../../../dist')));


const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_OAUTH_CLIENT_ID,
  process.env.GMAIL_OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

// create transporter to email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_EMAIL,
    clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
    clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: accessToken
  },
  tls: {
    rejectUnauthorized: false
  }
})

const port = 5000;



app.post('/api/email', (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL,
    subject: req.body.firstName + " " + req.body.lastName + " wants to contact you!",
    text: req.body.message
  }
  console.log("mail options: ", mailOptions);

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log("Error sending email: ", err);
    } else {
      console.log("Email sent: ", info.response);
      console.log("Info: ", info);
      res.status(200).send(info);
    }
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'), (err) => {
      if(err) {
          res.status(500).send(err);
      }
  });
});



app.listen(port, () => console.log(`Blog app listening on port ${port}`))