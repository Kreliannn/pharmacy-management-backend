import mongoose, { Schema, Document } from 'mongoose';


const SupplierSchema: Schema = new Schema({
  ProductName: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  cost: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  orderedDate: { type: String, required: true },
  orderedReceived: { type: String, required: true },
  expirydDate: { type: String, required: true },
  supplierName: { type: String, required: true },
  receivedBy: { type: String, required: true },
});

export default mongoose.model('Supplier', SupplierSchema);
