// Define the events data as an array of objects
var eventsData = [
    {
      title: "Kileleshwa",
      date: "2023-02-01",
      location: [-1.2807, 36.7817],
      description: "This is the first event"
    },
    {
      title: "Thika",
      date: "2023-03-01",
      location: [-1.0388, 37.0834],
      description: "This is the second event"
    },
    {
      title: "Juja",
      date: "2022-04-01",
      location: [-1.1018, 37.0144],
      description: "This is the third event"
    }
  ];
  
  // Initialize the map
  var map = L.map('map').setView([-1.2807, 37.0144], 10);
  
  // Add a tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  
  // Loop through the events data and create markers on the map
  for (var i = 0; i < eventsData.length; i++) {
    var event = eventsData[i];
    var marker = L.marker(event.location).addTo(map);
    marker.bindPopup('<b>' + event.title + '</b><br>' + event.description + '<br>Date: ' + event.date);
  }
  