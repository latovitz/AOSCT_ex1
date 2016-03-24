//handle mail send

var nodemailer = require('nodemailer');

exports.sendMail = function (recipient, file){
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://aosct1%40gmail.com:AOSCTAOSCT@smtp.gmail.com');
    
    var reader = new FileReader();
    reader.onload = function (e){
        var fileContent = e.target.result;
    }

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Or Lato" <aosct1@gmail..com>', // sender address
        to: recipient, // list of receivers
        subject: 'Hello, File 4 U ✔', // Subject line
        text: 'Hey There 🐴', // plaintext body
        attachments: [
            {
                filename: file.name,

            }
        ]
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}