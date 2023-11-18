import { Request, Response } from 'express';
import { UsersService } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UsersService.createUser(userData);
    res.status(200).json({
      success: true,
      message: 'Create User Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    });
  }
};

export const UsersController = {
  createUser,
};
