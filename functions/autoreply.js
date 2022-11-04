const transporter = require("./transporter");

require("dotenv").config();

exports.handler = (event, body, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: process.env.EMAIL,
    to: body.email,
    subject: "Email Confirmation Jowam T.C.",
    html: `<h3>Hi ${body.name},</h3>
    <p>
      Thank you for reaching out to us at Jowam Training Centre <br />
    We have received yur email and will get back to you with feedback.
      Best Regards, <br />
      <strong>Jowam Training Centre</strong> 
    </p>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      cb(err, {
        statusCode: 400,
        body: err.message,
      });
    } else {
      cb(null, {
        statusCode: 200,
        body: "success",
      });
    }
  });
};
