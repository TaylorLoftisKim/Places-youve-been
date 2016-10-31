//buisness logic
function Location(city, country, note, date)  {
  this.newCity = city;
  this.newCountry = country;
  this.newNote = note;
  this.newDate = date;
}




//user interface logic
$(function(){
  $("form#new-location").submit(function(event)  {
  event.preventDefault();

    var inputCity = $("input#new-city").val();
    var inputCountry = $("input#new-country").val();
    var inputNotes = $("input#notes").val();
    var inputDate = $("input#time-of-the-year").val();
    var newLocation = new Location(inputCity, inputCountry, inputNotes, inputDate);
    console.log(newLocation);
    $("ul#location").append("<li><span class='location'>" + newLocation.newCity + ", " + newLocation.newCountry + "</span></li>");
    $("input#new-city").val("");
    $("input#new-country").val("");
    $("input#notes").val("");
    $("input#time-of-the-year").val("");
    $(".location").last().click(function()  {
      $("#show-location").show();
      $("show-location h2").show();
      $(".new-city").text(newLocation.newCity);
      $(".new-country").text(newLocation.newCountry);
      $(".new-date").text(newLocation.newDate);
      $(".new-note").text(newLocation.newNote);
    });
  });
});
