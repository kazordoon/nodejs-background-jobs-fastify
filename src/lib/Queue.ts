/* eslint-disable no-console */
import Queue from 'bull';
import redisConfig from '../config/redis';
import * as jobs from '../jobs';

const queues = Object.values(jobs).map(({ key, handle, options }) => ({
  bull: new Queue(key, { redis: redisConfig }),
  name: key,
  handle,
  options,
}));

export default {
  queues,
  add(name: string, data: any) {
    const queueFound = queues.find((queue) => queue.name === name);
    if (!queueFound) {
      return new Error('Queue not found.');
    }

    return queueFound.bull.add(data, queueFound.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.warn('Job failed', job.name, job.data);
        console.error(err);
      });
    });
  },
};
