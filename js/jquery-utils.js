function









function appendWeatherData(weatherObj) {
	let weatherCard = $(`<div class="card col-3 p-0"></div>`);

	weatherCard.append(
		`<div class="card-header date">${weatherObj[0].date}</div>
		<div class="card-body">
		<div class="temp">Temperature: ${weatherObj[0].temp} F</div>
		<hr>
		<div class="desc-container">
			<div class="desc">${weatherObj[0].desc}</div>
			<img class="icon0" src="img/${weatherObj[0].icon}.png">
		</div>
		<hr>
		<div class="humidity">Humidity: ${weatherObj[0].humidity}</div>
		<hr>
		<div class="wind">Wind: ${weatherObj[0].wind}</div>
	</div>`
	)

	$(`#forecast-container`)
		.append(weatherCard)
}




