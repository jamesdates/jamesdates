function MarkMe() {
  var birth = L.marker([58.466781651989535, 8.755421841858654]).addTo(myMap);
  birth.bindPopup("<b>Birth</b> Hey guys, this is wehre I was born before I was taken home");

  var home1 = L.marker([58.65287758119509, 9.143629797084088]).addTo(myMap);
  home1.bindPopup("<b>1st Home</b> This is where I first lived, for approximately 1 year, I believe. After this we moved, but luckily not very far.>");
}
