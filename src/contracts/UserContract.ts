import { Document } from 'mongoose';

interface UserContract extends Document {
  name: string
  email: string
  password: string
}

export default UserContract;
