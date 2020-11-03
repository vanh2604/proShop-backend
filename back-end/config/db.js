import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log('Mongodb connected: ' + conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
