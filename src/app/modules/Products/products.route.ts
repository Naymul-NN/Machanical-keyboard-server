

import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/', productController.createPorduct);

export const PorductsRoutes = router