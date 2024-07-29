import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./products.service";


const createPorduct = catchAsync(async (req, res) => {
    const result = await productService.createPorductintoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' Product added successfully',
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
// get all
  const getAllProducts = catchAsync(async (req, res) => {
    const result = await productService.getAllProductsFromDb();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All products fetched successfully',
        data: result
    });
});

// get the single product

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productService.getSingleProductFromDb(id)
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product retrieved successfully',
      data: result
  })
});


  export const productController = {
    createPorduct,
    getLastSixProducts,
    getSingleProduct,
    getAllProducts
  }