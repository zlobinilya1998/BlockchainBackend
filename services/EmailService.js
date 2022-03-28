import nodemailer from "nodemailer";

export class EmailService {
    static transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: '465',
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    static async registrationConfirm(to, href) {
            return await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Подтверждение регистрации Blockchain backend',
                text: '',
                html:
                    `
                    <div>
                        <h1>Подтверждение регистрациии на BlockchainBackend</h1>
                    </div>
                `
            })
    }
}
