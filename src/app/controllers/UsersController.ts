import { FastifyReply } from 'fastify';
import { CustomRequest } from '../../@types/fastify';
import User from '../models/User';
import Queue from '../../lib/Queue';

class UsersController {
  async store(req: CustomRequest, reply: FastifyReply) {
    try {
      const { name, email, password } = req.body;

      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) {
        return reply
          .code(409)
          .send({ error: 'There is already an user with the provided email.' });
      }

      const user = await User.create({ name, email, password });

      await Queue.add('RegistrationMail', { user });

      return { success: true };
    } catch (err) {
      return { error: 'Something wrong.' };
    }
  }
}

export default new UsersController();
