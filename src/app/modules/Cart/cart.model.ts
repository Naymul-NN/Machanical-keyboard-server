import { model, Schema } from "mongoose";
import { TproductCart } from "./cart.interface";

const ProductCartSchema = new Schema<TproductCart>({
    
   product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
   } ,
   
},
{
    timestamps:true
}
);

export const ProductCart = model('cart', ProductCartSchema);