var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// Require the Note and Article JS files
var Note = require("./models/note.js");
var Article = require("./models/article.js");
var PORT = process.env.PORT || 3000;
// Require the scraping packages
var request = require("request");
var cheerio = require("cheerio");

// Leverage ES6 Promises with mongoose
mongoose.Promise = Promise;

// Initialize Express
var expressthat = express();

// Usee Parser
expressthat.use(bodyParser.urlencoded({
    extended: false
}));

// Set up a public folder for all static images, files are located
expressthat.use(express.static("public"));

// Database config
mongoose.connect('mongodb://127.0.0.1:27017/mongooseUrl');
var db = mongoose.connection;

db.on("error", function(error){
    console.log("You have an error in mongoose: ", error);
});
db.once("open", function(){
    console.log("Congratulations, your mongoose connection was successful");
})

// Routes
expressthat.get("/scrape", function(req, res){
    request("http://www.echojs.com", function(error, response, html){
        var $ = cheerio.load(html);
        $("article h2").each(function(i, element){
            var result = {};
            // Scraping the page for each title that a title and link
            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");
            // If the current title element has a title and a link save this data to the collection
            var entry = new Article(result);
            entry.save(function(err, doc){
                if(err){
                    console.log(err);
                } else {
                    console.log(doc);
                }
            });
        });
    });
                res.send("Your articles are scraped, saved and completed");

});


expressthat.get("/articles", function(req, res) {
  Article.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(doc);
    }
  });
});

// expressthat.get("/saved", function(req,res){
//     Article.find({}, function(error, doc){
//         if(error){
//             console.log(error);
//         } else {
//             res.json(doc);
//         }
//     })

// })
expressthat.listen(PORT, function(){
    console.log("Your app is running on port 3000!");
})

