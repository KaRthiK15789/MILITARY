const TransferSchema = new mongoose.Schema({
  asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset' },
  fromBase: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
  toBase: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
  quantity: { type: Number, required: true },
  initiatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' }
}, { timestamps: true });
