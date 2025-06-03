import SupplierDb from "../model/supplier.model"
import {supplierInterface} from "../types/supplier.type"



export const createSupplierService = async (supplier: supplierInterface) => {
    await SupplierDb.create(supplier);
}

export const getSupplierService = async () => {
    const suppliers = await SupplierDb.find();
    return suppliers;
}

