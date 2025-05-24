import express from 'express';
import Asset from '../models/Asset.js';
import { authenticate } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const assets = await Asset.findAll();
  res.json(assets);
});

router.post('/', authenticate, async (req, res) => {
  const asset = await Asset.create(req.body);
  res.status(201).json(asset);
});

export default router;
