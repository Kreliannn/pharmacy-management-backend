import { supplierInterface } from "../types/supplier.type";
import { Request, Response } from "express";
import { createSupplierService, getSupplierService } from "../services/supplier.service";
import { checkIFProductExists, createProductService, updateProductQuantityService } from "../services/product.service";


export const createSupplierController = async (request: Request, response: Response) => {
    const supplier : supplierInterface = request.body.supplier
    
    await createSupplierService(supplier);

    if(await checkIFProductExists(supplier.ProductName)) await updateProductQuantityService(supplier.ProductName, supplier.quantity, "+")
    else await createProductService(supplier.ProductName, supplier.description, supplier.type, supplier.quantity, supplier.cost)
    
    const updatedSupplier = await getSupplierService();
    response.send(updatedSupplier);
}

export const getSupplierController = async (request: Request, response: Response) => {
    const suppliers = await getSupplierService();
    response.send(suppliers);
}