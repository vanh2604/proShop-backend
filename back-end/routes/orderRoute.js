import express from 'express';
import {
  createOrder,
  getOrder,
  getOrderList,
  updateGetPaid,
} from '../controller/orderController.js';
import protect from '../middleware/protected.js';

const router = express.Router();

router.route('/').post(protect, createOrder);
router.route('/list').get(protect, getOrderList);
router.route('/:id').get(protect, getOrder);
router.route('/:id/pay').put(protect, updateGetPaid);

export default router;
