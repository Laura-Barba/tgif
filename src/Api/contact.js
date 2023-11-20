

export default function (req, res) {
  console.log('contact.js', res)
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.username,
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'demo@jjj.com',
    to: 'opayaka0@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    debugger
    if (err)

      console.log('err', err)
    else
      console.log('info', info)
  })
  console.log('res', res)
  res.status(200)
}

// import nodemailer from 'nodemailer';

// const ENVIRONMENTS = {
//   GMAIL_APP_USERNAME: process.env.GMAIL_APP_USERNAME || '',
//   GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
// };

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: ENVIRONMENTS.GMAIL_APP_USERNAME,
//     pass: ENVIRONMENTS.GMAIL_APP_PASSWORD,
//   },
// });

// export default transporter;