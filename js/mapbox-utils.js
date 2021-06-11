mapboxgl.accessToken = mapbox_token


var map = new mapboxgl.Map({
	container: 'map',
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-98.4936, 29.4241],
	zoom: 12
});

let geocoder = setGeoCoder()
addGeocoderToMap(geocoder)

function setGeoCoder() {
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	})
}

function addGeocoderToMap(geocoder) {
	map.addControl(geocoder)
}

