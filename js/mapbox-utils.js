mapboxgl.accessToken = mapbox_token

var map = new mapboxgl.Map({
	container: 'map',
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-98.4936, 29.4241],
	zoom: 12
});

let geocoder = setGeoCoder()
let marker = setMarker([-98.4936, 29.4241])
fetchForecast(marker._lngLat)
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
getMarkerCoords()


//creates geocoder
function setGeoCoder() {
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	})
}


//changes pin to wherever geocoder searches
function addGeocoderEvent(geocoder) {
	geocoder.on("result", function (event) {
		marker.setLngLat(event.result.geometry.coordinates)
		fetchForecast(marker._lngLat)
	})
}

//adds geocoder to map
function addGeocoderToMap(geocoder) {
	map.addControl(geocoder)
}

//adds marker to map
function setMarker(point) {
	return new mapboxgl.Marker().setLngLat(point)
								.addTo(map)
								.setDraggable(true);
}

//gets forecast for marker location
function getMarkerCoords() {
	marker.on('dragend', function () {
		fetchForecast(marker._lngLat)
	})
}





