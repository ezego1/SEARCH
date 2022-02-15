import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  phoneNumber: String,
  lastName: String,
  firstName: String,
  state: String,
  jobTitle: String,
  statusCode: String,
});
