function MarkMe() {
  var birth = L.marker([58.466781651989535, 8.755421841858654]).addTo(myMap);
  birth.bindPopup("<b>Birth</b><b>Hey guys, this is wehre I was born!");
}
