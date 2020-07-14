import Mail from '../lib/Mail';
import RegistrationMailJob from '../contracts/RegistrationMailJob';
import Job from '../contracts/Job';

const registrationMailJob: Job = {
  key: 'RegistrationMail',
  async handle({ data }: RegistrationMailJob) {
    const { user } = data;

    await Mail.sendMail(user.name, user.email);
  },
  options: {},
};

export default registrationMailJob;
