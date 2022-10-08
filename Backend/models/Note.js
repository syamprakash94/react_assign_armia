const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      require: true,
      min: 3,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
