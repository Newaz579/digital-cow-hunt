import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  phoneNumber: string;
  role: string;
  password: string;
  name: UserName;
  address: string;
  budget: string;
  income: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

export type IUserFilterableFilters = {
  searchTerm?: string;
  role?: string;
  phoneNumber?: string;
  budget?: string;
};

export const userFilterableFields = [
  'searchTerm',
  'role',
  'phoneNumber',
  'budget',
];

export const userSearchableFields = ['role', 'phoneNumber', 'budget'];
