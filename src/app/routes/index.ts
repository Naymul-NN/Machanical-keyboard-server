import { Router } from 'express';

import { PorductsRoutes } from '../modules/Products/products.route';
import { PorductCartRoutes } from '../modules/Cart/cart.route';

const router = Router();

const moduleRoutes = [
 {
  path: '/product',
  route: PorductsRoutes,
 },
 {
  path: '/productCart',
  route: PorductCartRoutes,
 }

];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;