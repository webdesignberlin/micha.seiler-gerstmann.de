import { mailProtection } from './modules/mail-protect.ts';
import { writeCurrentDate } from './modules/age.ts';
import { typeWriter } from './modules/typewriter.ts';

writeCurrentDate('.js-age');
mailProtection();
typeWriter();
