import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UsersRoutes } from './app/modules/users/users.route';
import { CowRoutes } from './app/modules/cow/cow.routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Routes
app.use('/api/v1/users/', UsersRoutes);
app.use('/api/v1/cow', CowRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully');
});

export default app;
