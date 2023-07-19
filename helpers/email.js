import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del email

  const info = await transport.sendMail({
    from: '"Uptask- Administrador de proyecto" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Confirma tu cuenta",
    text: "Comprueba tu cuenta en Uptask",
    html: `<p>Hola: ${nombre} Confirma tu cuenta en Uptask</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
            
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>
            <p>Si tu no creaste esta cuenta, puedes ingnorar el mensaje.</p>
            
            `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Informacion del email

  const info = await transport.sendMail({
    from: '"Uptask- Administrador de proyecto" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Restablece tu Password",
    text: "Restablece tu password",
    html: `<p>Hola: ${nombre} has solicitado restablecer tu password</p>
            <p>Sigue el siguiente enlace para generar tu nuevo password:

            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a>
            </p>
            <p>Si tu no solicitaste este email, puedes ignorar el mensaje.</p>
            
            `,
  });
};
