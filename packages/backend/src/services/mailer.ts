import type { MailerRepository } from '@repositories';
import { getEnv } from '@helpers';

export class MailerService {
    private _mailerRepository: MailerRepository;

    constructor(mailerRepository: MailerRepository) {
        this._mailerRepository = mailerRepository;
    }

    public async sendGreetingTo(email: string) {
        return await this._mailerRepository.send({
            subject: 'Welcome to “Vse-bude”',
            to: [{ email }],
            sender: { email: getEnv('EMAIL_SERVICE_ADDRESS') },
            htmlContent: 'We.lcome to our online auction platform, “Vse-bude”',
        });
    }
}
