const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product_name : {
      type: String,
      required: true
  },
  product_link: {
    type: String,
    required: true
  },
  chat_id: {
      type: String
  },
  dealStatus: {
    type: String,
    required: true
  },
  admin_details: {
    type: String
  }
},{ timestamps: true });


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;