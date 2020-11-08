import express from 'express';
import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).send('there is no order');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      paymentMethod,
      shippingAddress,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (!order) {
    res.status(404).send('Order not found');
  } else {
    res.status(200).json(order);
  }
});

const getOrderList = asyncHandler(async (req, res) => {
  const orderList = await Order.find({ user: req.user._id });
  res.status(200).json(orderList);
});

const updateGetPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).send('not found order');
  }
});

export { createOrder, getOrder, updateGetPaid, getOrderList };
