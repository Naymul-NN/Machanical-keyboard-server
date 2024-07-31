

import express from 'express';
import { productCartController } from './cart.controller';


const router = express.Router();

router.post('/create-productCart', productCartController.createPorductCart);
router.get('/', productCartController.getAllProductCart);


export const PorductCartRoutes = router