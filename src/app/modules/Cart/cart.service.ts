import { TproductCart } from "./cart.interface";
import { ProductCart } from "./cart.model";

const createPorductCartintoDb = async (payload: TproductCart) => {
    const result = await ProductCart.create(payload);
    return result;
};

const getAllProductCartFromDb = async () => {
    const result = await ProductCart.find().populate('product');
    return result;
};


export  const  productCartService = {
    createPorductCartintoDb,
    getAllProductCartFromDb,

}