function appendWeatherData(weatherObj){
	$('#date').html(`${weatherObj[0].date}`)
	$('#temp').html(`Temperature: ${weatherObj[0].temp} F`)
	$('#desc').html(`${weatherObj[0].desc}`)
	$('#humidity').html(`Humidity: ${weatherObj[0].humidity}`)
	$('#wind').html(`Wind: ${weatherObj[0].wind}`)
}

