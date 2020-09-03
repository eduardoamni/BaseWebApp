$(document).ready(function(){
  getWeather();
})

function getWeather(){
  var url = "http://api.openweathermap.org/data/2.5/weather?q=Valladolid&appid=0a1d9df59674b9fc41355d91fc82e893";

  $.ajax(url, {success: function(data){
    console.log(data);
    $('.city').text(data.name);
    $('.temp').text(data.main.temp);
  }});
 
}