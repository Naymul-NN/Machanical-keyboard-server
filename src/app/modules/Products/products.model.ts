import { Schema, model } from "mongoose";
import { Tproducts } from "./products.interface";

const ProductSchema = new Schema<Tproducts>({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    availableQuantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
    
},
{
    timestamps:true
}
);

export const Product = model('Product', ProductSchema);