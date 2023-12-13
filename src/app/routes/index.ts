import express from 'express';
import { UsersRoutes } from '../modules/users/users.route';
import { CowRoutes } from '../modules/cow/cow.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UsersRoutes,
  },
  {
    path: '/cow',
    route: CowRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
