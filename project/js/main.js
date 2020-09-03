$(document).ready(function(){
  getWeather();
})

function getWeather(varr){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+ varr +"&units=metric&appid=0a1d9df59674b9fc41355d91fc82e893";

  $('.city').text("");
  $('.error-message').text("");

  $.ajax(url, {success: function(data){
    console.log(data);
    $('.city').text(data.name);
    $('.temp').text(data.main.temp);
  }, error: function(error){
      $(".error-message").text('ha ocurrido un error')
  }});
 
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}