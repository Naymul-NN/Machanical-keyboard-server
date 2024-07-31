import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productCartService } from "./cart.service";


const createPorductCart = catchAsync(async (req, res) => {
    const result = await productCartService.createPorductCartintoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' Product added successfully',
        data: result
    })
  });

  const getAllProductCart = catchAsync(async (req, res) => {
    const result = await productCartService.getAllProductCartFromDb();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All products fetched successfully',
        data: result
    });
});

  export const productCartController = {
    createPorductCart,
    getAllProductCart
  }