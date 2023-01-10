const nodemailer = require("nodemailer");

const user = ""; // hedhi t7ot feha l email 
const pass = ""; // houni lazmek ta3mel generation lel code hedha gmail apps 

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});
//fonction te5ou 3 parametres
module.exports.sendConfirmationEmail = (
  name,
  email,
  confirmationCode,
  password
) => {
  // transport houwa jesr from chkoun to amal  html body message chnouwa f wostou
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Veuillez activer votre compte ",
      html: `
      <div>
      <h1>Activation du compte </h1>
        <h2>Bonjour ${name}</h2>
        <p>Veuillez confirmer votre email en cliquant sur le lien suivant
</p>
        <a href=http://localhost:2727/confirm/${confirmationCode}>Cliquez ici
</a>
<ul>
<li> votre nom d'utilisateur ${name}  </li>
</ul>
        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendResetPasswordEmail = (email, randomCode) => {
  // transport houwa jesr from chkoun to amal  html body message chnouwa f wostou
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Demande reinitialisation du mot de passe  ",
      html: `
      <div>
      <h1> Réinitialisation du mot de passe </h1>
      
        <p>reinitialiser votre  mot de passe en cliquant sur le lien suivant
</p>
        <a href=http://localhost:3000/reset_password/${randomCode}>Cliquez ici
</a>

        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendWinElectionEMail = (email) => {
  // transport houwa jesr from chkoun to amal  html body message chnouwa f wostou
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Résultat élection",
      html: `
      <div>
      <h1> Vous avez ganger dans cette élection et vous serez syndic </h1>
      
        <p>ous avez ganger dans cette élection et vous serez syndic
</p>
      
        </div>`,
    })
    .catch((err) => console.log(err));
};
