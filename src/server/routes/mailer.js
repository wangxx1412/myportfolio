var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

const transporter = nodemailer.createTransport({
  host:'smtp.outlook.com',
  auth: {
    user:creds.USER,
    pass:creds.PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/api/send', (req, res, next) => {
  var name = req.body.Name
  var email = req.body.Email
  var message = req.body.Message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'xiaoxuanwang4869@yahoo.com',
    subject: 'New Message from My Portfolio\'s Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
