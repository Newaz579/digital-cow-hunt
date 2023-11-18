import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

export const UsersService = {
  createUser,
};
