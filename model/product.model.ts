
import mongoose, { Schema, Document } from 'mongoose';


const ProductSchema = new mongoose.Schema({
  productName: String,
  description: String,
  type: String,
  price: Number,
  quantity: Number,
  category : String,
  cost: Number,
  holdingCost: Number,
  caryingCost: Number,
  status: String,
  reorderPoint: Number,
  safetyStock: Number,
  orderQuantity: Number,
  year2022: Number,
  year2023: Number,
  year2024: Number
});

export default mongoose.model('Product', ProductSchema);