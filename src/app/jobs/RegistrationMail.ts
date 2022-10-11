import Mail from "../lib/Mail";
import { User } from "../interfaces/IUser";

export default {
    key: 'RegistrationMail',
    async handle({ data }){

        const { user } = data

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com>',
            to: `${user.name} < ${user.email} >`,
            subject: "Cadastro de usuário",
            html: `<h1>Olá ${user.name}!</h1>
                    <p>Isso é um teste de filas</p>
            `
        })
    }
}