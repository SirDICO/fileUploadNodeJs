const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
  colors:{
    type:String,
    enum:{
       values:['#ff000', '#00ff00', '#0000ff'],
        message:'{VALUE} is not supported',
      }
  },
   
  image: {
    type: String,
    required: true,
  },
  company:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  category:{
    type: String,
    required:true,
  },
  shipping:{
    type:Boolean,
    default:false
  },
  
});

module.exports = mongoose.model('Product', ProductSchema);
