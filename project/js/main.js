$(document).ready(function(){
  getWeather();
})

function getWeather(varr){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+ varr +"&units=metric&appid="+apiKey;

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