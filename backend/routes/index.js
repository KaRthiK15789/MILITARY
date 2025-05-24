import express from 'express';
import authRoutes from './auth.js';

const router = express.Router();

router.use('/auth', authRoutes);
// Add other routers here: assets, transfers, etc.

export default router;
