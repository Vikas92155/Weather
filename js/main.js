var x;
var url;
var city, country;
var arr;
var arr1 = [2];
var astro = [1];
var i,
    j,
    forecast1 = [];
forecast2 = [];
forecast3 = [];
forecast4 = [];
forecast5 = [];
forecast6 = [];
forecast7 = [];

function weather(event) {
    event.preventDefault();
    city = document.getElementById("city").value;
    country = document.getElementById("country").value;
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city + "%2C%20I" + country + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.get(url, function(item1) {
        x = item1;
        arr = x.query.results.channel.lastBuildDate;
        arr1[0] = x.query.results.channel.location.city;
        arr1[1] = x.query.results.channel.location.country;
        arr1[2] = x.query.results.channel.location.region;
        $("#item1").text(arr); //current date and time display
        $("#item2").text(arr1[0] + ","); //displays current location
        $("#item3").text(arr1[1]);
        $("#item4").text(arr1[2] + ",");
        astro[0] = x.query.results.channel.astronomy.sunrise;
        astro[1] = x.query.results.channel.astronomy.sunset;
        $("#sunrise").text("Sunrise:" + astro[0]); //current day sunrise display
        $("#sunset").text("Sunset:" + astro[1]); //currrent day sunset display
        //Current weather display
        forecast1[0] = x.query.results.channel.item.forecast[0].date;
        forecast1[1] = x.query.results.channel.item.forecast[0].day;
        forecast1[2] = x.query.results.channel.item.forecast[0].high;
        forecast1[3] = x.query.results.channel.item.forecast[0].low;
        forecast1[4] = x.query.results.channel.item.forecast[0].text;
        $("#forecast02").text("Highest: " + (parseInt(forecast1[2]) - 32) * 0.5556 + "'C");
        $("#forecast03").text("Lowest: " + (parseInt(forecast1[3]) - 32) * 0.5556 + "'C");
        $("#forecast04").text(forecast1[4]);

        //all rest six days weather display
        //day 1
        $("#rest").text("Weather For Next Six Days");
        forecast2[0] = x.query.results.channel.item.forecast[1].date;
        forecast2[1] = x.query.results.channel.item.forecast[1].day;
        forecast2[2] = x.query.results.channel.item.forecast[1].high;
        forecast2[3] = x.query.results.channel.item.forecast[1].low;
        forecast2[4] = x.query.results.channel.item.forecast[1].text;
        $("#forecast10").text(forecast2[0]);
        $("#forecast11").text(forecast2[1]);
        $("#forecast12").text("Highest: " + (parseInt(forecast2[2]) - 32) * 0.5556 + "'C");
        $("#forecast13").text("Lowest: " + (parseInt(forecast2[3]) - 32) * 0.5556 + "'C");
        $("#forecast14").text(forecast2[4]);

        //day2

        forecast3[0] = x.query.results.channel.item.forecast[2].date;
        forecast3[1] = x.query.results.channel.item.forecast[2].day;
        forecast3[2] = x.query.results.channel.item.forecast[2].high;
        forecast3[3] = x.query.results.channel.item.forecast[2].low;
        forecast3[4] = x.query.results.channel.item.forecast[2].text;
        $("#forecast20").text(forecast3[0]);
        $("#forecast21").text(forecast3[1]);
        $("#forecast22").text("Highest: " + (parseInt(forecast3[2]) - 32) * 0.5556 + "'C");
        $("#forecast23").text("Lowest: " + (parseInt(forecast3[3]) - 32) * 0.5556 + "'C");
        $("#forecast24").text(forecast3[4]);

        //day 3

        forecast4[0] = x.query.results.channel.item.forecast[3].date;
        forecast4[1] = x.query.results.channel.item.forecast[3].day;
        forecast4[2] = x.query.results.channel.item.forecast[3].high;
        forecast4[3] = x.query.results.channel.item.forecast[3].low;
        forecast4[4] = x.query.results.channel.item.forecast[3].text;
        $("#forecast30").text(forecast4[0]);
        $("#forecast31").text(forecast4[1]);
        $("#forecast32").text("Highest: " + (parseInt(forecast4[2]) - 32) * 0.5556 + "'C");
        $("#forecast33").text("Lowest: " + (parseInt(forecast4[3]) - 32) * 0.5556 + "'C");
        $("#forecast34").text(forecast4[4]);

        //day 4

        forecast5[0] = x.query.results.channel.item.forecast[4].date;
        forecast5[1] = x.query.results.channel.item.forecast[4].day;
        forecast5[2] = x.query.results.channel.item.forecast[4].high;
        forecast5[3] = x.query.results.channel.item.forecast[4].low;
        forecast5[4] = x.query.results.channel.item.forecast[4].text;
        $("#forecast40").text(forecast5[0]);
        $("#forecast41").text(forecast5[1]);
        $("#forecast42").text("Highest: " + (parseInt(forecast5[2]) - 32) * 0.5556 + "'C");
        $("#forecast43").text("Lowest: " + (parseInt(forecast5[3]) - 32) * 0.5556 + "'C");
        $("#forecast44").text(forecast5[4]);

        //day5

        forecast6[0] = x.query.results.channel.item.forecast[5].date;
        forecast6[1] = x.query.results.channel.item.forecast[5].day;
        forecast6[2] = x.query.results.channel.item.forecast[5].high;
        forecast6[3] = x.query.results.channel.item.forecast[5].low;
        forecast6[4] = x.query.results.channel.item.forecast[5].text;
        $("#forecast50").text(forecast6[0]);
        $("#forecast51").text(forecast6[1]);
        $("#forecast52").text("Highest: " + (parseInt(forecast6[2]) - 32) * 0.5556 + "'C");
        $("#forecast53").text("Lowest: " + (parseInt(forecast6[3]) - 32) * 0.5556 + "'C");
        $("#forecast54").text(forecast6[4]);

        //day6

        forecast7[0] = x.query.results.channel.item.forecast[6].date;
        forecast7[1] = x.query.results.channel.item.forecast[6].day;
        forecast7[2] = x.query.results.channel.item.forecast[6].high;
        forecast7[3] = x.query.results.channel.item.forecast[6].low;
        forecast7[4] = x.query.results.channel.item.forecast[6].text;
        $("#forecast60").text(forecast7[0]);
        $("#forecast61").text(forecast7[1]);
        $("#forecast62").text("Highest: " + (parseInt(forecast7[2]) - 32) * 0.5556 + "'C");
        $("#forecast63").text("Lowest: " + (parseInt(forecast7[3]) - 32) * 0.5556 + "'C");
        $("#forecast64").text(forecast7[4]);
    });

};
