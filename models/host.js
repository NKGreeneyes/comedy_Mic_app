const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define and export a model like so:

const hostSchema = new Schema(
  {
    email: { type: String },
    pass: { type: String }
  },
);

const Comedian = mongoose.model("Host", hostSchema);

module.exports = Comedian;
