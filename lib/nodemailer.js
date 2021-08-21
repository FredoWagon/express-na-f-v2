const nodemailer = require("nodemailer");



const smtpConfig = {
    host: 'smtp.sendgrid.net',
    port: 465
};



const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_CREDENCE
    }
});



const sendMessage = function (data) {
    const mailData = {
        from: `${data.name} via Naïf.com <nayf.site@gmail.com>`,  // sender address
        to: "msieurnayf@gmail.com",   // list of receivers
        subject: `Message de la part de : ${data.name}`,
        replyTo: `${data.name} <${data.email}>`,
        text: `
        Nom : ${data.name} \n 
        Email : ${data.email} \n 
        _________________________ \n 
        Message : \n 
        ${data.content}`

    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
        res.status(201).json({message: "c'est arrivé !", log: info});
    });
}

module.exports = {sendMessage}