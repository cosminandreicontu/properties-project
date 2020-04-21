const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PropertySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    coordinates: {
        type: [Number],
        required: true
    },
    city: {
        type: String,
        required: true
    },
  },
  sold_price: {
      type: String,
      required: true
  },
  currency: {
      type: String,
      required: true
  },
  images: {
        type: [String],
        required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Property = mongoose.model("properties", PropertySchema);