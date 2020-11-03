import express from 'express';
import products from './data/products.js';
import user from './data/user.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import { config } from 'dotenv';
import connectToDatabase from './config/db.js';

config();

connectToDatabase();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const users = await User.insertMany(user);
    const createdAdminUser = users[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: createdAdminUser,
    }));

    await Product.insertMany(sampleProducts);

    console.log('Data imported');
  } catch (error) {
    console.log(error);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('data destroyed');
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
