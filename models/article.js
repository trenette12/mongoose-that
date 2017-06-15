var mongoose = require("mongoose");

// Create Schema
var Schema = mongoose.Schema;

// Create the article schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});
var Article = mongoose.model("Article", ArticleSchema);
// Export the model
module.exports = Article;