const { Schema, model } = require("../connection");

const studySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  credits: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("study", studySchema);
