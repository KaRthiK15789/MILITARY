import express from 'express';
import Expenditure from '../models/Expenditure.js';
import Asset from '../models/Asset.js';
import { authenticate } from '../middlewares/auth.js';
const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const { assetId, quantity, base } = req.body;
  await Expenditure.create({ ...req.body, date: new Date() });
  await Asset.increment({ quantity: -quantity }, { where: { id: assetId, base } });
  res.sendStatus(201);
});

router.get('/', authenticate, async (req, res) => {
  const expenditures = await Expenditure.findAll();
  res.json(expenditures);
});

export default router;
