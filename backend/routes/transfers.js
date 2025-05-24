import express from 'express';
import Transfer from '../models/Transfer.js';
import Asset from '../models/Asset.js';
import { authenticate } from '../middlewares/auth.js';
const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const { assetId, fromBase, toBase, quantity } = req.body;
  await Transfer.create({ ...req.body, date: new Date() });
  await Asset.increment({ quantity: -quantity }, { where: { id: assetId, base: fromBase } });
  await Asset.increment({ quantity: quantity }, { where: { id: assetId, base: toBase } });
  res.sendStatus(201);
});

router.get('/', authenticate, async (req, res) => {
  const transfers = await Transfer.findAll();
  res.json(transfers);
});

export default router;
