$(document).ready(function() {

  var long;
  var lat;
  var fTemp;
  var celsius;

      

   function changeBackground(fTemp){
          if (fTemp > 80) {
            $("body").css("background-image", "url(http://www.whiskyisrael.co.il/wp-content/uploads/2016/07/summertime-7-super-strategies-for-seniors.jpg)");
          } else if (fTemp > 60) {
            $("body").css("background-image", 'url(http://az616578.vo.msecnd.net/files/2016/08/11/636065554421332270-922755664_fall%20(1).jpg)');
          } else if (fTemp > 40) {
            $("body").css('background-image', 'url(https://www.stgeorges.co.uk/sites/default/files/blog_uploads/2012/02/snow_london.jpg)');
          } else if (fTemp > 100) {
            $("body").css('background-image', 'url(http://rappingmanual.com/wp-content/uploads/2014/10/mixtape3.jpg)');
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
        $("#weatherType").html(weatherType);
        $("#temp").html(fTemp + "&#8457;");
        $("body").css(changeBackground(fTemp));
        
      

    });
  });
}





 });
