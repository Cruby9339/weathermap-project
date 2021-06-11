mapboxgl.accessToken = mapbox_token


var map = new mapboxgl.Map({
	container: 'map',
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-98.4936, 29.4241],
	zoom: 12
});

let marker = setMarker([-98.4936, 29.4241])

let geocoder = setGeoCoder()
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
addMapEvent(marker)


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

//creates the marker
function setMarker(point) {
	return new mapboxgl.Marker().setLngLat(point)
								.addTo(map);

}

//changes pin to wherever geocoder searches
function addGeocoderEvent(geocoder) {
	geocoder.on("result", function (event) {
		marker.setLngLat(event.result.geometry.coordinates)

		setPopup(event.result.result_placename)
	})
}

//adds event to map that changes location of mark
//based on where the user clicks
function addMapEvent() {
	map.on('click', function (event) {
		console.log(event.lngLat)
		marker.setLngLat(event.lngLat)
			  .addTo(map)
	})
}
