var x = document.getElementById("demo");
var array1 = [];
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&key=AIzaSyAeOZNJ6oCxbLM6m19WGS7IZm0pjLaD_hs";
    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true";
    $.get(url,function(pos){
        var par = pos;
         var city1 = par.results[0].address_components[3].long_name;
         var country1 = par.results[0].address_components[6].long_name;
    var url1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city1+"%2C%20I"+country1+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.get(url1,function(posit){
        var parse = posit;
        array1[0] = parse.query.results.channel.lastBuildDate;
        array1[1] = parse.query.results.channel.location.city;
        array1[2] = parse.query.results.channel.location.region;
        array1[3] = parse.query.results.channel.location.country;
        array1[4] = parse.query.results.channel.astronomy.sunrise;
        array1[5] = parse.query.results.channel.astronomy.sunset;
        array1[6] = parse.query.results.channel.item.forecast[0].high;
        array1[7] = parse.query.results.channel.item.forecast[0].low;
        array1[8] = parse.query.results.channel.item.condition.temp;
        array1[9] = parse.query.results.channel.item.condition.text;
        $("#array2").text(array1[0]);
        $("#array3").text(array1[1]+",");
        $("#array4").text(array1[2]+",");
        $("#array5").text(array1[3]);
        $("#array6").text("Sunrise: "+array1[4]);
        $("#array7").text("Sunset: "+array1[5]);
        $("#array8").text("Current Temp: "+(parseInt(array1[8])-32)*0.5556+"'C");
        $("#array9").text("High: "+(parseInt(array1[6])-32)*0.5556+"'C");
        $("#array10").text("Low: "+(parseInt(array1[7])-32)*0.5556+"'C");
        $("#array11").text(array1[9]);
    })
    })
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
