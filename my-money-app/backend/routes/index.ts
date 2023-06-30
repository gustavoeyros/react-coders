import { Router } from 'express';
import express from 'express';
import BillingController from '../controllers/BillingController';
import cors from 'cors';

const router = Router();
router.use(express.json());
router.use(cors());

router.get('/billing', BillingController.getAll);
router.get('/billing/:id', BillingController.getBillingById);
router.post('/billing', BillingController.newbilling);
router.get('/summary', BillingController.summaryBilling)
router.get('/count', BillingController.countBilling)
router.put('/billing/:id', BillingController.updateBilling);
router.delete('/billing/:id', BillingController.deleteBilling); 

export default router;