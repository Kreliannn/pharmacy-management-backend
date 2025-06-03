import { productInterface, getProductInterface } from "../types/product.type";
import { Request, Response } from "express";
import { getProductService, createProductService, updatedProductPrceCategoryService, updatedProductYearService} from "../services/product.service";



export const getProductController = async (request: Request, response: Response) => {
    const products = await getProductService();
    response.send(products);
}

export const updateProductPriceCategoryController = async (request: Request, response: Response) => {
    const {_id, price, category} = request.body.product
    
    await updatedProductPrceCategoryService(_id, price, category);

    const products = await getProductService();
    response.send(products);
}


export const updateProductYearController = async (request: Request, response: Response) => {
    const {_id, year2022, year2023, year2024} = request.body.product
    
    await updatedProductYearService(_id, year2022, year2023, year2024);

    const products = await getProductService();
    response.send(products);
}