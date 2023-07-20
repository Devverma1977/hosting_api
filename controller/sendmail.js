const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "worksdevloper@gmail.com",
        pass: "zlzpbngcyoqkmydv",
      },
    });

    let info = await transporter.sendMail({
      from: req.body.sender,
      to: "worksdevloper@gmail.com",
      subject: "PortFolio Message",
      text: `Froms: ${req.body.senderEmail}, Name: ${req.body.name}, Message: ${req.body.message}`,
      html: `<h3>From:</h3><h3>${req.body.senderEmail}</h3><p>Name: ${req.body.name}, Message: ${req.body.message}</p>`,
    });

    let info2 = await transporter.sendMail({
      from: "gautamyadav1992002@gmail.com",
      to: req.body.senderEmail,
      subject: "Feedback Message",
      text: `Your message has been successfully sent to Dev Verma.\n\n${req.body.message}`,
    });

    res.json(info);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the email." });
  }
};

module.exports = sendMail;
