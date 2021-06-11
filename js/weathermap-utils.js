$.ajax({
	url: "http://api.openweathermap.org/data/2.5/forecast",
	type: "GET",
	data: {
		APPID: open_weathermap_token,
		lat: 29.424,
		lon: -98.493,
		units: "imperial"
	},
	success: function (data){
		console.log(data)
	}
})