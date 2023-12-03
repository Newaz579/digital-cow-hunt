import { NextFunction, Request, Response } from 'express';
import { UsersService } from './users.service';
// import { IUser } from './users.interface';
// import httpStatus from 'http-status';
// import sendResponse from '../../../shared/sendResponse';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body;
    const result = await UsersService.createUser(userData);
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }

  // sendResponse<IUser>(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: 'User created Successfully!',
  //   data: result,
  // });
};

export const UsersController = {
  createUser,
};
