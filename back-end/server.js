import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './config/db.js';
import cors from 'cors';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';

dotenv.config();

const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

// const PORT = process.env.PORT || 5000;
// const mode = process.env.NODE_ENVIRONMENT;

app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.listen(process.env.PORT || 5000, console.log(`listen on port`));
