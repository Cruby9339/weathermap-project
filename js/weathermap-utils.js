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

			createTemp(filterTemp(data))
		}
	});
}

function filterTemp(data){
	let weatherObjectArr = [
		{
			date: data.list[0].dt_txt,
			temp: data.list[0].main.temp

		},

	]
	return weatherObjectArr
}





