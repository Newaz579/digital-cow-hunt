import express from 'express';
import { CowController } from './cow.controller';
import validateRequest from '../../middlewares/validateRequest';
import { cowValidation } from './cow.validation';

const router = express.Router();

router.post(
  '/create-cow',
  validateRequest(cowValidation.createCowZodSchema),
  CowController.createCow,
);

export const CowRoutes = router;
