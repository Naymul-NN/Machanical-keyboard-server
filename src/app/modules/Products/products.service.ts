import { Tproducts } from "./products.interface";
import { Product } from "./products.model";


const createPorductintoDb = async (payload: Tproducts) => {
    const result = await Product.create(payload);
    return result;
};

const getLastSixProductsFromDb = async () => {
    const result = await Product.find().sort({ createdAt: -1 }).limit(6);
    return result;
};

export const productService = {
    createPorductintoDb,
    getLastSixProductsFromDb
}