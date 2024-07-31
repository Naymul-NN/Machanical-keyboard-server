

import express from 'express';
import { productCartController } from './cart.controller';


const router = express.Router();

router.post('/create-productCart', productCartController.createPorductCart);


export const PorductCartRoutes = router