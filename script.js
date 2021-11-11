let map;

function initMap() {

	const locations = [
	  {
	    name: "buhl",
	    marker: { lat: 39.89934652471325, lng: -80.18544316892239 },
	    polygon: [
	      { lat: 39.89950878796206, lng: -80.18564178954172 },
	      { lat: 39.89950878796206, lng: -80.18551304351189 },
	      { lat: 39.89954891333424, lng: -80.18551304351189 },
	      { lat: 39.899546855623434, lng: -80.18537356864626 },
	      { lat: 39.89950878796206, lng: -80.18537222754178 },
	      { lat: 39.89950878796206, lng: -80.18525689255674 },
	      { lat: 39.899184697556294, lng: -80.18526091587017 },
	      { lat: 39.899188812999625, lng: -80.18564178954172 },
	      { lat: 39.89950878796206, lng: -80.18564178954172 }
	    ],
	    description:
	      "<div class='modal'><h1 class='descriptionTitle'>Buhl Hall</h1><p>Buhl Hall is home to the Departments of Criminal Justice, Humanities, Engligh & Foreign Languages, and Communication.</p></div>",
	    color: "#0373fc",
	    icon: "https://i.imgur.com/3lmYcm8.png"
	  },
	  {
	    name: "hanna",
	    marker: { lat: 39.899470830464765, lng: -80.18704591113499 },
	    polygon: [
	      { lat: 39.899575902129406, lng: -80.18715171790629 },
	      { lat: 39.899575902129406, lng: -80.18694183506034 },
	      { lat: 39.89937424625455, lng: -80.18694183506034 },
	      { lat: 39.89937424625455, lng: -80.18715708232408 },
	      { lat: 39.899575902129406, lng: -80.18715171790629 }
	    ],
	    description:
	      "<div class='modal'><h1 class='descriptionTitle'>Hanna Hall</h1><p>Hanna Hall houses our Department of Business Administration. Built in 1851, it is the oldest building on campus.</p></div>",
	    color: "#0373fc",
	    icon: "https://i.imgur.com/3lmYcm8.png"
	  },
	 {
	 	name: "CRED"
	 	marker: {lat:39.8979868, lng: -80.1873361},
	 	polygon: [
	 	{ lat: 39.89820789567786, lng: -80.1863954019053 },
		{ lat: 39.898204677891705, lng:  -80.18609970550332 },
		{ lat: 39.89802287272942, lng:  -80.18610389977852 },
		{ lat: 39.89802930831865,  lng:  -80.18640588759332 },
		{ lat: 39.89820789567786, lng: -80.1863954019053 }
	 	],
	 	description:
	"<div class='modal'><h1 class='descriptionTitle'>Center for Research and Economic Development</h1><p>The Center for Research and Economic Development strives to stimulate economic development in southwestern Pennsylvania through scientific research, faculty and staff expertise, resources and partnerships. CRED makes Waynesburg University's facilities and equipment available to area business and organizations.</p></div>",
	    color: "#0373fc",
	    icon: "https://i.imgur.com/3lmYcm8.png"
	 },

	map = new google.maps.Map(document.getElementById("map"), {
	  center: { lat: 39.8997005, lng: -80.1869912 },
	  zoom: 18,
	  styles: 
	  [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffdc00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b5a7a7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#548060"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7c6a4b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]
	});

	Object.keys(locations).forEach(function (location) {
	  console.log(locations[location].name);

	  const addMarker = new google.maps.Marker({
	    position: locations[location].marker,
	    map,
	    icon: locations[location].icon
	  });
	  const addPolygon = new google.maps.Polygon({
	    paths: locations[location].polygon,
	    strokeColor: locations[location].color,
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: locations[location].color,
	    fillOpacity: 0.35
	  });
	  addPolygon.setMap(map);
	  const infowindow = new google.maps.InfoWindow({
	    content: locations[location].description
	  });

	  addMarker.addListener("click", () => {
	    infowindow.open({
	      anchor: addMarker,
	      map,
	      shouldFocus: false
	    });
	  });
	});

}


