// Initialize Leaflet map
var myMap;

function initialise() {
    // Define the tile layer properties and set the appropriate attribution
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

    // Create the map object
    myMap = new L.Map('mapid');
    // Start the map at the initial coordinates
    myMap.setView(new L.LatLng(58.466781651989535, 8.755421841858654), 9);
    // Apply the properties of the map
    myMap.addLayer(osm);

    // Add markers
    addMarkers();
}

function addMarkers() {
    // Define birth marker
    var birth = L.marker([58.466781651989535, 8.755421841858654]).addTo(myMap);
    birth.bindPopup("<b>Birth</b> Hey guys, this is where I was born before I was taken <a href='#' onclick='openHome1()'>home</a>");

    // Define home1 marker
    var home1 = L.marker([58.65287758119509, 9.143629797084088]).addTo(myMap);
    home1.bindPopup("<b>1st Home</b> This is where I first lived for approximately 1 year, I believe. After this we moved, but luckily not very far.");

    // Function to open home1 marker's popup when the link in birth marker's popup is clicked
    window.openHome1 = function() {
        home1.openPopup();
        myMap.setView(new L.LatLng(58.65287758119509, 9.143629797084088), 15);
    }

    // Add click event listener to birth marker to zoom in when clicked
    birth.on('click', function(e) {
        myMap.setView(e.latlng, 15); // Zoom to level 15 when birth marker is clicked
    });
}

// Call the initialise function to set up the map and markers
initialise();
