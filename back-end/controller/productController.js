import express from 'express';
import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const products = await Product.find({ ...keyword });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'product not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
