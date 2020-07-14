import { FastifyRequest } from 'fastify';

type CustomRequest = FastifyRequest<{
  Body: {
    name: string;
    email: string;
    password: string;
  }
}>;
