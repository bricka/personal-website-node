import sendgrid, { mail as helper} from 'sendgrid';

const TO_EMAIL = 'alex@alexrbrick.com';

const client = sendgrid(process.env.SENDGRID_API_KEY);

export default (name, from, subject, body) => {
    const from_email = new helper.Email(from);
    const content = new helper.Content('text/plain', body);
    const mail = new helper.Mail(from_email, subject, TO_EMAIL, content);

    const request = client.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    client.API(request);
}