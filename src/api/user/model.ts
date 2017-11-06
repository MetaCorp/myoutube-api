import * as mongoose from 'mongoose';

// Replace "mpromise" library with native
// ES6 Promises (removes depracation warning).
(<any>mongoose).Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  birthDate: String
});

export const Users = mongoose.model('Users', userSchema);
