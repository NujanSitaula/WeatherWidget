/**
 * Name: Nujan Sitaula
 * URL: https://nujan.com.np
 * 
 * */

function weathers(){
	fetch(

		"https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=0de6fc00abc79dc9398e8181bd49765c"

		)
	.then((result) => result.json()) //Fetching Data From Json API.
	.then((result) => {
		const WeatherDetails = result["weather"][0]["description"];
		const WeatherMain = result["weather"][0]["main"];
		const TemperatureValue = result["main"]["temp"];
		const MaxTemp = result["main"]["temp_max"];
		const MinTemp = result["main"]["temp_min"];
		const FeelsLike = result["main"]["feels_like"];
		const HumLevel = result["main"]["humidity"];
		const WindLevel = result["wind"]["speed"];
		const CityName = result["name"];
		const CountryName = result["sys"]["country"];

		//Changing Climate Icon According To Weather Status.

		if (WeatherMain == "Clouds") {
			document.getElementById("WeatherIcon").className = "bi-clouds";
		}
		else if(WeatherMain == "Thunderstorm"){
			document.getElementById("WeatherIcon").className = "bi-cloud-lightning-rain"
		}
		else if(WeatherMain == "Drizzle"){
			document.getElementById("WeatherIcon").className = "bi-cloud-drizzle"
		}
		else if(WeatherMain == "Rain"){
			document.getElementById("WeatherIcon").className = "bi-cloud-rain-heavy"
		}
		else if(WeatherMain == "Snow"){
			document.getElementById("WeatherIcon").className = "bi-cloud-snow"
		}
		else if(WeatherMain == "Clear"){
			document.getElementById("WeatherIcon").className = "bi-brightness-high"
		}

		//Converting Calvin to Celcious

		TempCelcious = parseInt((TemperatureValue - 273.15));

		LowTemp = parseInt((MinTemp - 273.15));

		HighTemp = parseInt((MaxTemp - 273.15));

		FeelsLikeCelcious = parseInt((FeelsLike - 273.15));

		//Inserting Values To HTML

		document.getElementById("TemperatureValue").innerHTML = TempCelcious + "°C";

		document.getElementById("WeatherType").innerHTML = WeatherDetails;

		document.getElementById("FeelsLikeValue").innerHTML = FeelsLikeCelcious;

		document.getElementById("TempLevelLow").innerHTML = LowTemp;

		document.getElementById("TempLevelHigh").innerHTML = HighTemp;

		document.getElementById("HumidityLevel").innerHTML = HumLevel;

		document.getElementById("WindSpeed").innerHTML = parseInt(WindLevel);

		document.getElementById("CityName").innerHTML = CityName;

		document.getElementById("CountryInfo").innerHTML = CountryName;

	});

}
weathers(); //Calling Function

//Converting Degree Celcious to Farhnite

function checking(){
	FerValue = parseInt(TempCelcious * 1.800 + 32);
    var Conversion =document.getElementById("TemperatureValue").innerHTML;
    var Converting = Conversion.split("°");
    if (Converting[1] == "C"){
    	document.getElementById("TemperatureValue").innerHTML = FerValue + "°F";
    }
 
    else{
    	document.getElementById("TemperatureValue").innerHTML = TempCelcious + "°C";
    }
}

