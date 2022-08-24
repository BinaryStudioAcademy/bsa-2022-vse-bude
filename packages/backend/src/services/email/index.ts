import { SendInBlueEmailProvider } from '../../providers/email';
import { EmailService } from './email';

export const emailService = new EmailService(new SendInBlueEmailProvider());
