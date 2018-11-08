var markerCluster;
var map;
var marker;
var markers;
var southEast = {lat: 34.487516, lng: -85.222430};


function initMap() {
   
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: southEast,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

      // Define the LatLng coordinates for the polygon.
  var seCoords = [
    {lat: 32.378, lng: -86.318},
    {lat: 30.442, lng: -84.288},
    {lat: 33.751, lng: -84.387},
    {lat: 38.201, lng: -84.874},
    {lat: 32.299, lng: -90.185},
    {lat: 35.780, lng: -78.639},
    {lat: 34.002, lng: -81.029},
    {lat: 36.164, lng: -86.812},
    {lat: 38.978, lng: -76.497},
    {lat: 37.540, lng: -77.441},
    {lat: 38.344, lng: -81.609},
    {lat: 34.746, lng: -92.291},
 
];

// Construct the polygon.
var seTriangle = new google.maps.Polygon({
  paths: seCoords,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: '#800080',
  fillOpacity: 0.35
});
seTriangle.setMap(map);

    // Create an array of alphabetical characters used to label the markers.
    var labels = [ "Montgomery AL", "Tallahassee FL", "Atlanta GA", "Frankfort KY", "Jackson MS", "Raleigh NC", "Columbia SC", "Nashville TN", "Annanpolis MD", "Baton Rouge LA", "Charleston WV", "Little Rock AK"];

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.BOUNCE,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        

  }

  var locations = [
    {lat: 32.378, lng: -86.318},
    {lat: 30.442, lng: -84.288},
    {lat: 33.751, lng: -84.387},
    {lat: 38.201, lng: -84.874},
    {lat: 32.299, lng: -90.185},
    {lat: 35.780, lng: -78.639},
    {lat: 34.002, lng: -81.029},
    {lat: 36.164, lng: -86.812},
    {lat: 38.978, lng: -76.497},
    {lat: 37.540, lng: -77.441},
    {lat: 38.344, lng: -81.609},
    {lat: 34.746, lng: -92.291},
  
  ]

  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function showMarkers() {
setMapOnAll(map);
}


function deleteMarkers() {

}

