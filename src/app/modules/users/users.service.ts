import ApiError from '../../../errors/ApiError';
import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  if (!result) {
    throw new ApiError(400, 'Failed to create user');
  }
  return result;
};

export const UsersService = {
  createUser,
};
