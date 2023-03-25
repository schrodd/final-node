import { NODEMAILER_EMAIL } from "../../config/config.js";

export function userCreatedTemplate(user) {
  const emailOptions = {
    from: "Server de NodeJS",
    to: NODEMAILER_EMAIL,
    subject: "Se ha creado una cuenta",
    html: `¡Hola Administrador!
    ${user.name} se ha creado una cuenta en el sitio web.
    Su usuario es ${user.username}.`,
  };
  return emailOptions;
}

export function orderPlacedTemplate(user) {
  const emailOptions = {
    from: "Server de NodeJS",
    to: NODEMAILER_EMAIL,
    subject: `Tu tienda tiene un nuevo pedido de ${user.username}`,
    html: `¡Hola Administrador!
    Ha ingresado un nuevo pedido de ${user.name} (${user.username}).`,
  };
  return emailOptions;
}
