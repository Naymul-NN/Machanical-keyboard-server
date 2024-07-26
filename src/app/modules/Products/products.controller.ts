import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./products.service";


const createPorduct = catchAsync(async (req, res) => {
    const result = await productService.createPorductintoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room added successfully',
        data: result
    })
  });

  // get last 6 data
  const getLastSixProducts = catchAsync(async (req, res) => {
    const result = await productService.getLastSixProductsFromDb();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Last 6 products fetched successfully',
        data: result
    });
});


  export const productController = {
    createPorduct,
    getLastSixProducts
  }