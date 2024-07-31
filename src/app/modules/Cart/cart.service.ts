import { TproductCart } from "./cart.interface";
import { ProductCart } from "./cart.model";

const createPorductCartintoDb = async (payload: TproductCart) => {
    const result = await ProductCart.create(payload);
    return result;
};


export  const  productCartService = {
    createPorductCartintoDb,
}