import mongoose, { Schema, Document } from "mongoose";


const TransactionSchema: Schema = new Schema({
  date: { type: String, required: true },
  customer: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  cashier: { type: String, required: true },
});

export default mongoose.model("Transaction", TransactionSchema);
