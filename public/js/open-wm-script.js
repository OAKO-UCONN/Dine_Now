$(document).ready(function () {
  
  //Onclick function for search box
  $("#search-button").on("click", function () {
    
    var searchValue = $("#search-value").val();
    
    //if (searchValue != ''){

    // clear input box
    $("#search-value").val("");
    //Search Value is the City name
    searchWeather(searchValue);

    //} else {
    //  $("error").html('Searchbox is empty! Enter in a City!')
    //}
  });

//var units = metric;

  //Taking the search value to AJAX and sending to OpenWeatherMap API.
  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue + "&appid=" + "757616426ad9d4b087c1407581edc051" + "&units=imperial", dataType: "json",
      success: function (data) {
        //Data is weather info back from the API

        //Widgets
          var widget = show(data)

          $("#show").html(widget);

        //Debug to make sure the API is functioning properly.
        console.log(data);

      }
    });
  }

//Retrieve the data and output as HTML.
function show(data){
  //Weather (Cloudy Sunny Raining Storm)
  return "<h2 style='font-size:40px; font-weight: bold;'>Current Weather for " + data.name + ", " +
  data.sys.country +"</h2>" +
    "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
    "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
    "<h3><strong>Tempature</strong>: "+ data.main.temp +"</h3>" +
    "<h3><strong>Pressure</strong>: "+ data.main.pressure +"</h3>" +
    "<h3><strong>Humidity</strong>: "+ data.main.humidity +"</h3>" +
    "<h3><strong>Min. Tempature</strong>: "+ data.main.temp_min +"</h3>" +
    "<h3><strong>Max. Tempature</strong>: "+ data.main.temp_max +"</h3>" +
    "<h3><strong>Wind Speed</strong>: "+ data.wind.speed +"</h3>" +
    "<h3><strong>Wind Direction</strong>: "+ data.wind.deg +"</h3>";
};

/*
  //Change text
  function CityText(){

  }
*/
  
});

//Show Date and time
var current = $.now();
var maxDate = new Date(current);
var currentDate = maxDate.toString();
$('#date').html(currentDate);

