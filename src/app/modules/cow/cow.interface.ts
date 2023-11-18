import { Model, Types } from 'mongoose';
import { IUser } from '../users/users.interface';

export type ICow = {
  name: string;
  age: string;
  price: string;
  location: string;
  breed: string;
  weight: string;
  label: string;
  category: string;
  seller: Types.ObjectId | IUser;
};

export type CowModel = Model<ICow, Record<string, unknown>>;

/*
{
  "name": "Bella",
  "age": 4,
  "price": 5000,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "ObjectId(609c17fc1281bb001f523456)"
}
*/
