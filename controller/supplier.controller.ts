import { supplierInterface } from "../types/supplier.type";
import { Request, Response } from "express";
import { createSupplierService, getSupplierService } from "../services/supplier.service";

export const createSupplierController = async (request: Request, response: Response) => {
    const supplier : supplierInterface = request.body.supplier
    console.log(supplier);
    await createSupplierService(supplier);
    response.send("Supplier created successfully");
}

export const getSupplierController = async (request: Request, response: Response) => {
    const suppliers = await getSupplierService();
    response.send(suppliers);
}