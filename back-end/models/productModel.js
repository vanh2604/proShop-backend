import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
    name: { type: String, require: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    countInStock: { type: Number, require: true, default: 0 },
    reviews: [reviewSchema],
    numReviews: { type: Number, require: true, default: 0 },
    rating: { type: Number, require: true, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
