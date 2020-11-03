import express from 'express';
import { config } from 'dotenv';
import connectToDatabase from './config/db.js';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';

config();

const app = express();

connectToDatabase();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENVIRONMENT;

app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.listen(5000, console.log(`listen on port ${PORT} mode ${mode}`));
