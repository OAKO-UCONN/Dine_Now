$(document).ready(function() {

    $(function() {
    $(".weatherandLocation").on("click", function(event) {
    var lat = $(this).data("lat");
    var lng = $(this).data("lng");
    $.ajax("/weather-location" + lat + lng, {
      method: "GET",
      type: JSON,
      data: {},
    });
  });

  $(".viewSeating").on("click", function(event) {
    var tables = $(this).data("availableTables");
    $.ajax("/seating/" + tables, {
      method: "GET",
      type: JSON,
      data: {},
    });
  });
  //this ajax call is for when the user clicks a reserve button, it will reserve the chosen table
  $(".reserve").on("click", function(event) {
    var id = $(this).data("id");
    // var tableReserved = $(this).data("reserveTable"); //make reserveTable a boolean in the DB
    $.ajax("/reserve-table/" + id, {
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

}