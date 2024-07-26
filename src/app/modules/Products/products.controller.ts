import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productmService } from "./products.service";


const createPorduct = catchAsync(async (req, res) => {
    const result = await productmService.createPorductintoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room added successfully',
        data: result
    })
  });

  export const productController = {
    createPorduct
  }