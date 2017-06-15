//Grab the saved articles as a json object
$.getJSON("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

// $(document).on("click", "p", function() {
//   // Empty the contents of the note
//   $("#notes").empty();
//   // This saves the <p> id tag
//   var thisId = $(this).attr("data-id");
//   // Here is the ajax call for the saved articles
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     .done(function(data) {
//       console.log(data);
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input form to enter a new title
//       $("#notes").append("<input id='thetitle' name='title' >");
//       // Here is the textarea tag to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // Submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
//       if (data.note) {
//         $("#thetitle").val(data.note.title);
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });
// When you save a note
// $(document).on("click", "#savenote", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");
//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // The data from title input
//       title: $("#thetitle").val(),
//       // The data from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // Once it's done
//     .done(function(data) {
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });
//   // Empty the contents that was inside the title and body
//   $("#thetitle").val("");
//   $("#bodyinput").val("");
// });