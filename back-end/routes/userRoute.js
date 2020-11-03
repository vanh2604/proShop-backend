import express from 'express';
import { authUser, getUserProfile, createUser } from '../controller/userController.js';
import protect from '../middleware/protected.js';

const router = express.Router();

router.route('/login').post(authUser);

router.route('/profile').get(protect, getUserProfile);

router.route('/signup').post(createUser);

export default router;
