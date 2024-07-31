import { model, Schema } from "mongoose";
import { TproductCart } from "./cart.interface";
import httpStatus from "http-status";
import AppError from "../../errors/appError";

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

ProductCartSchema.pre('save', async function(next) {
    
        const existingCart = await ProductCart.findOne({ product: this.product });
        if (existingCart) {
                    throw new AppError(httpStatus.NOT_FOUND,'this product is already exist');
                }
                next();
       
    
});

export const ProductCart = model('cart', ProductCartSchema);