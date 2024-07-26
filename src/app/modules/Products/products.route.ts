

import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/create-product', productController.createPorduct);
router.get('/', productController.getLastSixProducts);
router.get('/:id', productController.getSingleProduct);

export const PorductsRoutes = router
