$(document).ready(function() {
  //this ajax call is for when the user clicks a reserve button, it will reserve the chosen table
  $(".reserve").on("click", function(event) {
    var id = $(this).data("id");
    // var tableReserved = $(this).data("reserveTable"); //make reserveTable a boolean in the DB
    $.ajax("/members/" + id, {
      method: "PUT",
      data: {
        reserveTable: true,
      },
    })
      .then(function() {
        console.log("this table has been reserved");
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
