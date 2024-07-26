import { Router } from 'express';

import { PorductsRoutes } from '../modules/Products/products.route';

const router = Router();

const moduleRoutes = [
 {
  path: '/product',
  route: PorductsRoutes,
 }

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;