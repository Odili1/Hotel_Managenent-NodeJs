const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true,
    },
    roomType: {
      type: Schema.Types.ObjectId,
      ref: "roomtype",
      required: false,
      // enum: ['Premium', "Standard", "Economic"]
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = model('room', roomSchema);