$(document).ready(function() {

  var long;
  var lat;
  var fTemp;
  var celsius;

      
     function changeBackground(fTemp){
          if (fTemp > 80) {
            $("body").addClass("summer");
          } else if (fTemp > 60) {
            $("body").addClass("spring");
          } else if (fTemp > 40) {
            $("body").addClass("winter");
          } else if (fTemp > 100) {
            $("body").addClass("blazing");
          }

          console.log("background changed");
    };
 
  

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var long = position.coords.longitude;
      var lat = position.coords.latitude;

      var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=39f9f41538d178dc3636314cb73fb255";

      console.log(api);

      $.getJSON(api, function(data) {
        var weatherType = data.weather[0].description;
        var kelvin = data.main.temp;
        console.log(kelvin);
        var windSpeed = data.wind.speed;
        var city = data.name;
        var iconCode = data.weather[0].icon;
        fTemp = ((kelvin) * (9 / 5) - 459.67).toFixed(2);
        celsius = (kelvin - 273).toFixed(2);
        
        var tempSwap = true;
         $("#temp").click(function() {
          if (tempSwap === false) {
            $("#temp").html(fTemp + "&#8457;");
            tempSwap = true;
          } else {
            $("#temp").html(celsius + "&#8451;");
            tempSwap = false;
          }
      });

        $("#city").html(city);
        $("#weatherType").html(weatherType + " " + "<img src=" + "https://openweathermap.org/img/w/" + iconCode + ".png" + " " + "style=" + "width:20px" + ">");
        $("#temp").html(fTemp + "&#8457;");
        $("body").addClass(changeBackground(fTemp));
        
      });
  });
}





 });
