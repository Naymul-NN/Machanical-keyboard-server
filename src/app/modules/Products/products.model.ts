import { Schema, model } from "mongoose";
import { Tproducts } from "./products.interface";

const ProductSchema = new Schema<Tproducts>({
    name: {
        type: String,
        required: true,
    },
    
    
},
{
    timestamps:true
}
);


export const Product = model('Product', ProductSchema);