let fetchForecast = function (coords) {
	$.get({
		url: "https://api.openweathermap.org/data/2.5/forecast/",
		data: {
			APPID: open_weathermap_token,
			lat: coords.lat,
			lon: coords.lng,
			units: "imperial"
		},
		success: function (data){
			console.log(data)

			appendWeatherData(filterWeatherObject(data))
		}
	});
}

function filterWeatherObject(data){
	let weatherObjectArr = [
		{
			date: data.list[0].dt_txt,
			desc: data.list[0].weather[0].description,
			temp: data.list[0].main.temp,
			humidity: data.list[0].main.humidity,
			wind: data.list[0].wind.speed,
		},

	]
	return weatherObjectArr
}





