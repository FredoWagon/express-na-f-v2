const nodemailer = require("nodemailer");

//configuration du serveur smtp

const smtpConfig = {
    host: 'smtp.sendgrid.net',
    port: 465
};

// Initialisation de nodemailer.

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "nayf.site@gmail.com",
        pass: "zxymzoajgysvgepc"
    }
});

// Envoie de l'email de récupération de mot de passe

const sendMessage = function (data) {
    const mailData = {
        from: "nayf.site@gmail.com",  // sender address
        to: "msieurnayf@gmail.com ",   // list of receivers
        subject: "Récupération de mot de passe",
        text: `Salut la couille`
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