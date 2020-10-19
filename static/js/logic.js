// Create map object
var myMap = L.map("map", {
    center: [45.5051, -122.6750], //where?
    zoom: 10
  });
  
  // Add tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Use this link to get the geojson data.
  let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // function createMarkers(point) {
  //   L.marker(Point.geometry.coordinates[1], Point.geometry.coordinates[0]);
  // };

  // Grab GeoJSON data..
  d3.json(earthquakes).then(data => {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });
  
  //, {
      //after the data => curly bracket? pointToLayer: function(feature, [point, geometry.coordinates[1],
        // point.geometry.coordinates[0]])
    // }


// does this add data to each marker? Loop through the cities array and create one marker for each city object
// for (var i = 0; i < cities.length; i++) {
//   L.circle(cities[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: "purple",
//     // Setting our circle's radius equal to the output of our markerSize function
//     // This will make our marker's size proportionate to its population
//     radius: markerSize(cities[i].population)
//   }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
// };



// THIS IS JUST A TEST Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
// var marker = L.marker([44.9429, -123.0351], {
//   draggable: true,
//   title: "Salem-test"
// }).addTo(myMap);

// // Binding a pop-up to our marker
// marker.bindPopup("Hello There!");

// THIS IS JUST A TEST sample of adding popup to marker?
// data.forEach(city => {
//   L.marker(city.latlng)
//   .bindPopup(`${city.city}<hr>Population: ${city.pop}`)
//   .addTo(myMap)

// });
