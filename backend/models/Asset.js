const AssetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['weapon', 'vehicle', 'ammunition', 'equipment'],
    required: true 
  },
  quantity: { type: Number, default: 0 },
  base: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
  status: { type: String, default: 'available' }
}, { timestamps: true });
