const { Schema, model } = require("../connection");

const widgetSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("widget", widgetSchema);
