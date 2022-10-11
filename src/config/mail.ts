import { TransportOptions } from "nodemailer";

export default <TransportOptions>{
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
}

    