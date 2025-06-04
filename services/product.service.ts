import ProductDb from "../model/product.model"
import { getProductInterface, productInterface } from "../types/product.type";



export const getProductService = async () => {
    const products = await ProductDb.find();
    return products;
}

export const updatedProductPrceCategoryService = async (_id : string, price : number, category : string) => {
    await ProductDb.findByIdAndUpdate(_id, {price, category})
}

export const updatedProductYearService = async (_id : string, year2022 : number, year2023 : number,  year2024 : number) => {
    await ProductDb.findByIdAndUpdate(_id, {year2022, year2023, year2024})
}

export const checkIFProductExists = async (productName: string) => {
    const product = await ProductDb.findOne({ productName: productName });
    return product ? true : false;
}

export const updateProductQuantityService = async (name: string, quantity: number, operation : "+" | "-") => {
    const product = await ProductDb.findOne({ productName: name }) as getProductInterface;
    switch(operation)
    {
        case "+":
            product.quantity += quantity;
        break;

        case "-":
           const result = product.quantity - quantity;
           product.quantity = (result > 0 ) ? result : 0;
        break;
    }
    await product.save();
}


export const createProductService = async (name : string, description : string, type : string,  quantity : number, cost : number) => {
    const newProduct : productInterface = {
        productName : name,
        description: description,
        type: type,
        price: 0,
        quantity: quantity,
        holdingCost: 0,
        caryingCost: 0,
        status: "none",
        reorderPoint : 0,
        safetyStock : 0,
        orderQuantity : 0,
        year2022 : 0,
        year2023 : 0,
        year2024 : 0,
        category : "none",
        cost : cost
    }
    await ProductDb.create(newProduct);
}
