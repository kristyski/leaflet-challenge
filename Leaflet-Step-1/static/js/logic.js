// Create map object
var myMap = L.map("map", {
    center: [45.5051, -122.6750], //where should I center?
    zoom: 8
  });
  
  // add tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
// Define a markerSize function that will give each earthquake a different radius based on its magnitude
  function markerSize(mag) {
  // return population / 40;
  return (Math.sqrt(mag)*100);
  }

  // Use this link to get the geojson data.  I used all earthquakes in the past 7 days
  let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // Grab GeoJSON data..
  d3.json(earthquakes).then(data => {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });

  // / does this add data to each marker? Loop through the cities array and create one marker for each city object
for (var i = 0; i < earthquakes.length; i++) {
  L.circle(feature.geometry.coordinates[2], {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Set circle's radius equal to the output of markerSize function
    // This will make marker's size proportionate to its population
    radius: markerSize(feature.properties.mag*5)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
};

  //send earthquake layer to createMap function
  createmap(earthquakes);

// function createMap(earthquakes);


  // / THIS IS JUST A TEST Create a new marker
  // Pass in some initial options, and then add it to the map using the addTo method
  // var marker = L.marker([44.9429, -123.0351], {
  //   draggable: true,
  //   title: "Salem-test"
  // }).addTo(myMap);
  
  // // Binding a pop-up to our marker
  // marker.bindPopup("Hello There!");


  // create marker color function
// function markerColor(magnitude) {

//   if (magnitude <= 4.75) {
//       return "#1635D9";
//   } else if (4.75 < magnitude & magnitude <= 5.00) {
//       return "#13DECE";
//   } else if (5.00 < magnitude & magnitude <= 5.25) {
//       return "#12E510";
//   } else if (5.25 < magnitude & magnitude <= 5.50) {
//       return "#DCEB0C";
//   } else {
//       return "#F02908";
//   };
// }

  // function createMarkers(point) {
  //   L.marker(Point.geometry.coordinates[1], Point.geometry.coordinates[0]);
  // };

  // Create Markers function
// function createMarkers(response) {

//   var earthquakes = response.features;
//   var earthquakeMarkers = []

//   for (var index = 0; index < earthquakes.length; index++) {
//       var earthquake = earthquakes[index];

//       var marker = L.circleMarker([ earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0] ], {
//               radius: earthquake.properties.mag * 2,
//               fillColor: markerColor(earthquake.properties.mag),
//               fillOpacity: 0.75,
//               stroke: false
//           }
//           ).bindPopup("<h4>" + earthquake.properties.place + "</h4><hr><p>" + new Date (earthquake.properties.time) + "</p>" + "<p><b>Magnitude: " +  earthquake.properties.mag + "<b></p>");

//       earthquakeMarkers.push(marker);
//   }
//   createMap(L.layerGroup(earthquakeMarkers));

// }
  //, {
      //after the data => curly bracket? pointToLayer: function(feature, [point, geometry.coordinates[1],
        // point.geometry.coordinates[0]])
    // }


// THIS IS JUST A TEST sample of adding popup to marker?
// data.forEach(city => {
//   L.marker(city.latlng)
//   .bindPopup(`${city.city}<hr>Population: ${city.pop}`)
//   .addTo(myMap)

// });


// {
//   onEachFeature: onEachFeature,
//   pointToLayer: function (feature, latlng) {
//     return L.circleMarker(latlng, {
//       radius: feature.properties.mag*5,
//       opacity: .9,
//       fillcolor: getcolor(feature.geometry.coordinates[2]),
//       stroke: null,
//       weight: 2,
//       fillOpacity: 0.7,
//     });
//   }
// }