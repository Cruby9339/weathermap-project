mapboxgl.accessToken = mapbox_token

var map = new mapboxgl.Map({
	container: 'map',
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-98.4936, 29.4241],
	zoom: 12
});


let geocoder = setGeoCoder()
let marker = setMarker([-98.4936, 29.4241])
addGeocoderToMap(geocoder)
getMarkerCoords()

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


function setMarker(point) {
	return new mapboxgl.Marker().setLngLat(point)
								.addTo(map)
								.setDraggable(true);

}


function getMarkerCoords() {
	marker.on('dragend', function () {
		weather(marker._lngLat)
	})
}