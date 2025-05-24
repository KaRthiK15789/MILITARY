import express from 'express';
import authRoutes from './auth.js';
import assetRoutes from './assets.js';
import transferRoutes from './transfers.js';
import assignmentRoutes from './assignments.js';
import expenditureRoutes from './expenditures.js';

const router = express.Router();
router.use('/auth', authRoutes);
router.use('/assets', assetRoutes);
router.use('/transfers', transferRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/expenditures', expenditureRoutes);

export default router;
