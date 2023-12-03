import { Request, Response } from 'express';
import { CowService } from './cow.service';
import sendResponse from '../../../shared/sendResponse';
import { ICow } from './cow.interface';
import httpStatus from 'http-status';

const createCow = async (req: Request, res: Response) => {
  const cowData = req.body;
  const result = await CowService.createCow(cowData);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow created Successfully!',
    data: result,
  });
};

export const CowController = {
  createCow,
};
