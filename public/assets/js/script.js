// add event listener for when user clicks on submit button
// ajax call to /burger/

$(document).ready(function() {
  $(".devour-form").on("click", function(event) {
    event.preventDefault();

    console.log("Testing");
    var burger_id = $(this)
      .children(".burger_id")
      .val();

    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });
});
