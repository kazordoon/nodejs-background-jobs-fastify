import UserContract from './UserContract';

interface UserJob {
  data: {
    user: UserContract
  };
  options?: any;
}

export default UserJob;
