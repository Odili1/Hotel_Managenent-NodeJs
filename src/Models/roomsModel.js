const { Schema, model } = require("mongoose");
const { SCHEMAS } = require("../utils/constants");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true,
    },
    price: {
      type: String,
      require: true,
    },
    roomType: {
      type: Schema.Types.ObjectId,
      ref: "roomtype",
      required: false,
      // enum: ['Premium', "Standard", "Economic"]
    },
  },
  { timestamps: true }
);


module.exports = model('room', roomSchema);