const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define and export a model like so:

const comedianSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true }
  },
  { _id: false }
);

const Comedian = mongoose.model("Comedian", comedianSchema);

module.exports = Comedian;