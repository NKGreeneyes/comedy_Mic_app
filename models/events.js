const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define and export a model like so:

const eventsSchema = new Schema(
  {
    host: { type: String },
    hostcontact: { type: String },
    mic: { type: String },
    date: { type: String },
    location: { type: String },
    address: { type: String },
    website: { type: String },
    listorrandom: { type: String },
    signup: { type: String },
    starttime: { type: String },
    endtime: { type: String },
    numOfSpots: { type: String },
    addInfo: { type: String }
  }
);

const Events = mongoose.model("Event", eventsSchema);

module.exports = Events;