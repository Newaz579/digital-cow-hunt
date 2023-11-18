import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './users.interface';
import { userType } from './users.constant';

export const UserSchema = new Schema<IUser, UserModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: userType,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    income: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const User = model<IUser, UserModel>('User', UserSchema);
