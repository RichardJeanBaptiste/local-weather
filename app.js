$(document).ready(function() {

  var long;
  var lat;
  var fTemp;
  var celsius;


    function changeBackground(fTemp){
          if (fTemp > 80) {
            $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/A_sunny_day_in_Bradford_City_Park_(Taken_by_Flickr_user_8th_September_2012).jpg/1280px-A_sunny_day_in_Bradford_City_Park_(Taken_by_Flickr_user_8th_September_2012).jpg)');
          } else if (fTemp > 60) {
            $('body').css('background-image', 'url(https://c2.staticflickr.com/2/1340/5159112845_cc45f95283_b.jpg)');
          } else if (fTemp > 40) {
            $('body').css('background-image', 'url(https://www.stgeorges.co.uk/sites/default/files/blog_uploads/2012/02/snow_london.jpg)');
          } else if (fTemp > 100) {
            $('body').css('background-image', 'url(http://rappingmanual.com/wp-content/uploads/2014/10/mixtape3.jpg)');
          }
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
        $('body').css(changeBackground(fTemp));
        
      

    });
  });
}

   });