import express from 'express';
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
} from '../controller/userController.js';
import protect from '../middleware/protected.js';

const router = express.Router();

router.route('/login').post(authUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

router.route('/signup').post(createUser);

export default router;
