namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production';
    HOST: string;
    PORT: number;
    MONGODB_URI: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASS: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
  }
}
