const sendEmail = require('./sendEmail');

const sendResetPasswordEmail = async ({
  name,
  email,
  token,
   }) => {
  const message = `<p>Please reset password by using the following token: 
  <a href="${token}">Reset Password</a></p>`;

  return sendEmail({
    to: email,
    subject: 'Reset Password',
    html: `<h4>Hello, ${name}</h4>
   ${message}
   `,
  });
};

module.exports = sendResetPasswordEmail;
