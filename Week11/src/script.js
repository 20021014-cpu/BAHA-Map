mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXZpb2xldHMiLCJhIjoiY21oOXJxcGc4MWprOTJqb2FzaTNoNGJ5bCJ9.6VBhlK39URqi-5TRdKNGMw';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML  
  style:'mapbox://styles/blueviolets/cmh9rw4vd00qq01sm5ga06ilw',
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });