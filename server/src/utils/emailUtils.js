import nodemailer from "nodemailer";
import {
  SMTP_ADDRESS,
  SMTP_PASSWORD,
  OAUTH_CID,
  OAUTH_SECRET,
  OAUTH_REFRESH,
  OAUTH_ACCESS,
} from "../../env.js";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const sendEmail = async (address, subject, body) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      type: "OAuth2",
      user: SMTP_ADDRESS,
      pass: SMTP_PASSWORD,
      clientId: OAUTH_CID,
      clientSecret: OAUTH_SECRET,
      refreshToken: OAUTH_REFRESH,
      accessToken: OAUTH_ACCESS,
    },
    tls: {
      rejectUnauthorized: false, //MUCHO WARNING!!  -->  SOLO PARA DESARROLLO
    },
  });

  // Define the email options
  const mailOptions = {
    from: SMTP_ADDRESS,
    to: address,
    subject: subject,
    html: body,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export { validateEmail, sendEmail };
