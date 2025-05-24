import express from 'express';
import Assignment from '../models/Assignment.js';
import Asset from '../models/Asset.js';
import { authenticate } from '../middlewares/auth.js';
const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const { assetId, quantity, base } = req.body;
  await Assignment.create({ ...req.body, date: new Date() });
  await Asset.increment({ quantity: -quantity }, { where: { id: assetId, base } });
  res.sendStatus(201);
});

router.get('/', authenticate, async (req, res) => {
  const assignments = await Assignment.findAll();
  res.json(assignments);
});

export default router;
