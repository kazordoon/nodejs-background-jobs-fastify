import { QueueOptions } from 'bull';

interface Job {
  key: string
  handle: (...any: any[]) => Promise<void>
  options?: QueueOptions
}

export default Job;
