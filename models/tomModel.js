const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define and export a model like so:

const tomSchema = new Schema(
  {
    email: { type: String },
    pass: { type: String }
  },
);

const Example = mongoose.model("Tom", tomSchema);

module.exports = Example;
