function initialise() {
    // Define the tile layer properties and set the appropriate attribution
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 100, attribution: osmAttrib});

    // Create the map object
    myMap = new L.Map('mapid');
    // Start the map in South-East England
    myMap.setView(new L.LatLng(58.466781651989535, 8.755421841858654), 9);
    // Apply the properties of the map
    myMap.addLayer(osm);

    // Call MarkMe function after the map has been initialized
    MarkMe();
}

function MarkMe() {
    var birth = L.marker([58.466781651989535, 8.755421841858654]).addTo(myMap);
    birth.bindPopup("<b>Birth</b> Hey guys, this is where I was born before I was taken <a href='#' onClick='openHome1()'>home</a>");

    var home1 = L.marker([58.65287758119509, 9.143629797084088]).addTo(myMap);
    home1.bindPopup("<b>1st Home</b> This is where I first lived, for approximately 1 year, I believe. After this we moved, but luckily not very far.");

    function openHome1() {
        home1.openPopup();
    }

    birth.on('click', function(e) {
        myMap.setView(e.latlng, 100); // Zoom to level 100 when marker1 is clicked
    });
}

// Call the initialise function to set up the map

