function initialise() {
	// define the tile layer properties and set the appropriate attribution
	var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

	// create the map object
	myMap = new L.Map('mapid');
	// start the map in South-East England
	myMap.setView(new L.LatLng(58.466781651989535, 8.755421841858654),9);
	// apply the properties of the map
	myMap.addLayer(osm);
	// add markers?
	MarkMe(myMap);
}
