fetch('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-79.0494,35.9021,10.88,0/300x200?access_token=pk.eyJ1IjoiemVpdGVsIiwiYSI6ImNsMTNzbDc0bDBla2czZG8wbmJpc3BoY2EifQ.-lqRt-NY1UwbpmSy3wYyCw')
  .then(response => response.json())
  .then(data => console.log(data));

