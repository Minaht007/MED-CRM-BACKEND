const nodemailer = require("nodemailer");

function createTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            password: process.env.SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
          }
    });
}

function sendActivationMail(to, link) {
    const transporter = createTransporter();

    return transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: "Account activation" + process.env.API_URL,
        text: "",
        html: `
            <div>
            <h1>To activate, follow the link</h1>
            <a href="${link}">${link}</a>
            </div>
        `
    });
}

const mailService = {
    sendActivationMail
};

module.exports = mailService;