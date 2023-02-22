const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['extra large', 'large', 'small', 'medium', 'economic'],
    },
  },
  { timestamps: true }
);

// roomSchema.index({ "$**": "text" }, { default_language: "english" });

module.exports = model('roomType', roomSchema);