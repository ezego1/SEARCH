import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  phoneNumber: string;
  lastName: string;
  firstName: string;
  state: string;
  jobTitle: string;
  statusCode: string;
}
