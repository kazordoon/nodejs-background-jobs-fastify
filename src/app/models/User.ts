import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserContract from '../../contracts/UserContract';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { versionKey: false, timestamps: true });

// eslint-disable-next-line prefer-arrow-callback
UserSchema.pre('save', async function hashPassword(this: UserContract) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
});

export default model<UserContract>('User', UserSchema);
