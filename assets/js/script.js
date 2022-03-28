
// var requestOptions = {
//   method: 'GET',


// };

// fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=9ee5fa8f90b149dc82d7a4f9da45a346", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


// Create a Leaflet map
const map = L.map('my-map').setView([34.77, 77.40], 10);
// Marker to save the position of found address
let marker;

// API key call
const myAPIKey = "9ee5fa8f90b149dc82d7a4f9da45a346";

// Retina displays require different mat tiles quality
const isRetina = L.Browser.retina;
const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

// add Geoapify attribution
map.attributionControl.setPrefix('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a>')

// Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution: '<a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
  apiKey: myAPIKey,
  maxZoom: 20,
  id: 'osm-bright',
}).addTo(map);

// move zoom controls to bottom right
// map.zoomControl.remove();
// L.control.zoom({
//   position: 'bottom-right'
// }).addTo(map);

function geocodeAddress() {
  const address = document.getElementById("address").value;
  if (!address || address.length < 3) {
    document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";

    return;
  }

	if (marker) {
  	marker.remove();
  }	

  const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

  // call Geocoding API - https://www.geoapify.com/geocoding-api
  fetch(geocodingUrl).then(result => result.json())
    .then(featureCollection => {
      if (featureCollection.features.length === 0) {
        document.getElementById("status").textContent = "The address is not found";
        return;
      }

      const foundAddress = featureCollection.features[0];
      document.getElementById("name").value = foundAddress.properties.name || '';
      document.getElementById("house-number").value = foundAddress.properties.housenumber || '';
      document.getElementById("street").value = foundAddress.properties.street || '';
      document.getElementById("postcode").value = foundAddress.properties.postcode || '';
      document.getElementById("city").value = foundAddress.properties.city || '';
      document.getElementById("state").value = foundAddress.properties.state || '';
      document.getElementById("country").value = foundAddress.properties.country || '';

      document.getElementById("status").textContent = `Found address: ${foundAddress.properties.formatted}`;

			marker = L.marker(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon)).addTo(map);
			map.panTo(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon));
    });
  }

var api_key = '02f2795b43078e88ef905f7d5da7';

// url = 'https://api.sportsdata.io/v3/cbb/scores/json/TeamSchedule/{season}/{team}';
// headers = {'Ocp-Apim-Subscription-Key': '{key}'.format(key=api_key)}

// jsonData = requests.get(url, headers=headers).json();

// console.log(jsonData);

var teamSchedule = function(){
    console.log('hit')
    // event.preventDefault();
    var apiUrl = "https://noahs-server-proj1.herokuapp.com/https://api.sportsdata.io/v3/cbb/scores/json/Games/2021";
    var requests = {
        method: "GET",
        headers: {'Ocp-Apim-Subscription-Key': '{key}'.format(key=api_key)}
    }
    fetch(apiUrl,requests).then(function(response){
       if(response.ok){
            response.json().then(function(data){
                console.log(data);
            })
       }

    })

};
teamSchedule();
                //apikey 02f2795b43078e88ef905f7d5da7

