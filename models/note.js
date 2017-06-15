var mongoose = require("mongoose");

// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});
//  This is the note model from the note js file
var Note = mongoose.model("Note", NoteSchema);
// Export the Note model
module.exports = Note;