import { Tproducts } from "./products.interface";
import { Product } from "./products.model";


const createPorductintoDb = async (payload: Tproducts) => {
    const result = await Product.create(payload);
    return result;
};

export const productmService = {
    createPorductintoDb
}