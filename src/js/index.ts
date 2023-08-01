import { mailProtection } from './modules/mail-protect.ts';
import { writeCurrentDate } from './modules/age.ts';

writeCurrentDate('.js-age');
mailProtection();
