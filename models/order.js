const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  created : {
    type:Date , default: Date.now
  },
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
       
    }
  ],
  user: {
    email: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }  ,
  },
  created : {
    type:Date , default: Date.now
  },
  contact :{
       address: {type : String , required: true},
       phone: {type : String , required: true}
  }
});

module.exports = mongoose.model('Order', orderSchema);
