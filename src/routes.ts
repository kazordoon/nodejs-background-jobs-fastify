import { FastifyInstance } from 'fastify';
import UsersController from './app/controllers/UsersController';
import userSchema from './validators/user';

async function routes(fastify: FastifyInstance) {
  fastify.post('/users', {
    handler: UsersController.store,
    schema: userSchema,
  });
}

export default routes;
