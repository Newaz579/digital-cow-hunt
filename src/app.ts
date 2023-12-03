import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UsersRoutes } from './app/modules/users/users.route';
import { CowRoutes } from './app/modules/cow/cow.routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import ApiError from './errors/ApiError';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Routes
app.use('/api/v1/users/', UsersRoutes);
app.use('/api/v1/cow', CowRoutes);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  //   res.send('Working Successfully');
  // throw new ApiError(400,'ore baba error')
  Promise.reject(new Error('unhandled promise rejection'));
});

// Global error handler
app.use(globalErrorHandler);

export default app;
