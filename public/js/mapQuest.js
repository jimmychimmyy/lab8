function initMap() {
	// add your code here
  L.mapquest.key = 'lRt6z9yAp4uez3yxuTDC8lg6dCmro4LR';
  var map = L.mapquest.map('map', {
    center: [32.8788, -117.2359],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false,
  });

  L.marker([32.8788, -117.2359]).addTo(map);
}
