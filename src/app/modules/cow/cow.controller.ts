import { Request, Response } from 'express';
import { CowService } from './cow.service';

const createCow = async (req: Request, res: Response) => {
  try {
    const cowData = req.body;
    const result = await CowService.createCow(cowData);
    res.status(200).json({
      success: true,
      message: 'Cow Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: 'Failed to create cow',
    });
  }
};

export const CowController = {
  createCow,
};
