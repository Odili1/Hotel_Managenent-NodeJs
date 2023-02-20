const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['large', 'small', 'medium'],
    },
  },
  { timestamps: true }
);

// roomSchema.index({ "$**": "text" }, { default_language: "english" });

module.exports = model('room-type', roomSchema);