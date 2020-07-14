import Fastify, { FastifyInstance } from 'fastify';
import 'dotenv/config';
import './database';
import routes from './routes';

class App {
  private host: string;
  private port: number;
  public server: FastifyInstance;

  constructor() {
    this.server = Fastify();
    this.host = process.env.HOST || 'localhost';
    this.port = Number(process.env.PORT) || 3333;

    this.loadRoutes();
  }

  private loadRoutes() {
    this.server.register(routes);
  }

  public start() {
    this.server.listen(this.port, this.host);
  }
}

export default new App();
