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
	      "<div class='modal'><h1 class='descriptionTitle'>Buhl Hall</h1><p>Buhl Hall is home to the Departments of Criminal Justice, Humanities, Engligh & Foreign Languages, and Communication. The second floor of Buhl's computer lab is recently turning into a E-Sportd lab!</p></div>",
	    color: "#b6b6b8",
	    icon: "buhl.png"
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
	      "<div class='modal'><h1 class='descriptionTitle'>Hanna Hall</h1><p>Hanna Hall houses our Department of Business Administration. Built in 1851, it is the oldest building on campus. The building has no elevators, be ready to climb 3 flights of strairs if you are on the top floor.</p></div>",
	    color: "#b6b6b8",
	    icon: "building.png"
	  },
	 {
	 	name: "CRED",
	 	marker: {lat:39.898052171737376, lng:-80.18626811505975},
	 	polygon: [
	 	{ lat: 39.89820789567786, lng: -80.1863954019053 },
		{ lat: 39.898204677891705, lng:  -80.18609970550332 },
		{ lat: 39.89802287272942, lng:  -80.18610389977852 },
		{ lat: 39.89802930831865,  lng:  -80.18640588759332 },
		{ lat: 39.89820789567786, lng: -80.1863954019053 }
	 	],
	 	description:
	"<div class='modal'><h1 class='descriptionTitle'>Center for Research and Economic Development</h1><p>The Center for Research and Economic Development strives to stimulate economic development in southwestern Pennsylvania through scientific research, faculty and staff expertise, resources and partnerships. CRED makes Waynesburg University's facilities and equipment available to area business and organizations.</p></div>",
	    color: "#b6b6b8",
	    icon: "cred.png"
	 },
	 {
	 	name: "pollock",
	 	marker: {lat:39.89919421667611, lng:-80.18495383260439},
	 	polygon: [
	 	{lat: 39.89933056403454, lng: -80.18516533076999 },
	 	{lat: 39.89932851343633, lng: -80.18474835381987 },
	 	{lat:39.899187022010665, lng: -80.18474300796154 },
	 	{lat: 39.89918907261312, lng: -80.18516800369916 },
	 	{lat: 39.89933056403454, lng: -80.18516533076999 }
	 	],
	 	description:
	"<div class='modal'><h1 class='descriptionTitle'>Pollock Hall </h1>Pollock Hall is one of the newest girl dormitories at Waynesburg University. It is apart of SWEP which stands for South, West, East, Pollock.</p></div>",
	    color: "#b6b6b8",
	    icon: "dorms.png"
	 },

	 {
	 	name: "nest",
	 	marker: {lat:39.89807149304525, lng: -80.18540950508726},
	 	polygon: [
	 	{lat: 39.8982031743014, lng: -80.18528256249408},
		{lat: 39.89803340961704, lng: -80.1852906091205},
		{lat: 39.89803958288567, lng: -80.18549915085532},
		{lat: 39.89820883311696, lng: -80.18549512754211},
		{lat: 39.8982031743014, lng: -80.18528256249408}
	 	],
	 	description:
	"<div class='modal'><h1 class='descriptionTitle'>The Nest</h1>The Nest is the home to Waynesburg Universities apperal! You can find all of your Waynesburg goodies at The Nest. The Nest also has an upstairs portion called Rudy's Place. This is where students can relax, play games with their friends, or watch a football game!</p></div>",
	    color: "#b6b6b8",
	    icon: "nest.png"
	 },
	 {
	 	name: "stewart",
	 	marker: {lat:39.89799158211431, lng:-80.1866381288105},
	 	polygon: [
	 	{ lat: 39.89820313942542, lng: -80.18674222997413 },
		{ lat: 39.898196966171525, lng: -80.1864800440406 },
		{ lat: 39.8977313983387, lng: -80.1864981489516 },
		{ lat: 39.89773808607581, lng: -80.18675966433287 },
		{ lat: 39.89820313942542, lng: -80.18674222997413 }
	 	],
	 	description:
	"<div class='modal'><h1 class='descriptionTitle'>Stewart Science Building</h1>The Stewart Science Building contains five floors filled with our STEM majors. Those majors include Biology, Chemistry, Computer Science, Mathematics, and Nursing.</p></div>",
	    color: "#b6b6b8",
	    icon: "https://i.imgur.com/B15YxaT.png"
	 },
	 {
	 	name: "south",
	 	marker: {lat: 39.90024203031293, lng:-80.18595237254895},
	 	polygon: [
	 	{ lat: 39.90036605487646, lng: -80.18613153937626 },
  		{ lat: 39.90036296834702, lng: -80.18572786691594 },
  		{ lat: 39.90022304553257, lng: -80.18572786691594 },
  		{ lat: 39.90022407437784, lng: -80.18613556268981 },
  		{ lat: 39.90036605487646, lng: -80.18613153937626 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>South Hall</h1>South Hall is apart of the girls dormitories here at Waynesburg University. It is apart of SWEP which stands for South, West, East, Pollock.</p></div>",
	    color: "#b6b6b8",
	    icon: "dorms.png"
	 },
	 {
	 	name: "east",
	 	marker: {lat: 39.9003704107525, lng:-80.18552545781621},
	 	polygon:[
	 	{ lat: 39.90053787146326, lng: -80.18560984971823 },
  		{ lat: 39.90053787146326, lng: -80.18542477729457 },
  		{ lat: 39.900227082463, lng: -80.18542305089767 },
  		{ lat: 39.90022503189161, lng: -80.1856048100907 },
  		{ lat: 39.90053787146326, lng: -80.18560984971823 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>East Hall</h1>East Hall is apart of the girls dormitories here at Waynesburg University. It is apart of SWEP which stands for South, West, East, Pollock.</p></div>",
	    color: "#b6b6b8",
	    icon: "dorms.png"
	 },
	 {
	 	name: "west",
	 	marker: {lat:39.90039524602842, lng:-80.18632716488389},
	 	polygon:[
	 	{ lat: 39.900556198377956, lng: -80.1864066888825 },
  		{ lat: 39.90055312253561, lng: -80.1862209202955 },
 		{ lat: 39.900233234177925, lng: -80.18622893908343 },
  		{ lat: 39.90023425946349, lng: -80.18641337120577 },
  		{ lat: 39.900556198377956, lng: -80.1864066888825 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>West Hall</h1>West Hall is apart of the girls dormitories here at Waynesburg University. It is apart of SWEP which stands for South, West, East, Pollock.</p></div>",
	    color: "#b6b6b8",
	    icon: "dorms.png"
	 },
	 {
	 	name: "cj",
	 	marker: {lat:39.900317865694284, lng:-80.18890263026236},
	 	polygon: [
	 	{ lat: 39.900381516505455, lng: -80.18875312061515 },
  		{ lat: 39.90030229555674, lng: -80.18875312061515 },
  		{ lat: 39.900303838822865, lng: -80.1890005543931 },
  		{ lat: 39.90038357419121, lng: -80.18899988384086 },
  		{ lat: 39.900381516505455, lng: -80.18875312061515 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>CSI Center: Waynesburg University</h1>The CSI/CJ house is used for Criminal Justice majors to demonstrate the job field and what many of these students would exeriance out in the field. Students will practice their tactical approach and de-escalation skills with the University's Lasershot Firearms Simulator that is housed within the campus Crime Scene Investigation Center</p></div>",
	    color: "#b6b6b8",
	    icon: "building.png"
	 },
	 {
	 	name: "chapel",
	 	marker: {lat:39.900711702166326, lng:-80.18719607893345},
	 	polygon:[
	 	{ lat: 39.90094412190922, lng: -80.18730816171713 },
    	{ lat: 39.900937434485016, lng:-80.18702518866414  },
    	{ lat:39.90050687827982 , lng:-80.18703994081373  },
    	{ lat: 39.90051099364375, lng: -80.18732090220995 },
    	{ lat: 39.90094412190922, lng: -80.18730816171713 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Roberts Chapel</h1>Waynesburg University offers a weekly Chapel service on Tuesday morning at 11 AM in Roberts Chapel. This is an opportunity for students, faculty, and staff to gather for worship, prayer, and to hear a short message rooted in Scripture.</p></div>",
	    color: "#b6b6b8",
	    icon: "church.png"
	 },
	 {
	 	name: "wiley",
	 	marker:{lat:39.893172162547145, lng:-80.18152093664754},
	 	polygon: [
	 	 {lat: 39.893166248444665, lng: -80.18163074631076},
    	{lat: 39.893255252667345, lng: -80.18153753955332},
    	{lat: 39.8931785958582, lng: -80.18141482849859},
    	{lat:39.89309062048832, lng: -80.18150803525602},
    	{lat: 39.893166248444665, lng: -80.18163074631076}
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Wiley Stadium</h1>The 4,000-seat stadium was dedicated in 1998 and constructed for the 1999 season, honoring the school's former head football coach and trustee member. This is where Waynesburg students can come and watch the Yellow Jacket's play!</p></div>",
	    color: "#b6b6b8",
	    icon: "wiley.png"
	 },
	 {
	 	name: "willy",
	 	marker: {lat:39.89730189538589, lng:-80.186304204843},
	 	polygon:[
	 	{ lat: 39.897538998708136, lng: -80.18620531789718 },
  		{ lat: 39.897541056479255, lng: -80.18638502589995 },
  		{ lat: 39.89711509654142, lng: -80.18639307252694 },
  		{ lat: 39.89711509654142, lng: -80.18621604673316 },
  		{ lat: 39.897538998708136, lng: -80.18620531789718 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Wilison Hall</h1>Wilison Hall is apart of the boys dormitories here at Waynesburg University. It is the newest dormitory made for the males on camapus.</p></div>",
	    color: "#b6b6b8",
	    icon: "dorms.png"
	 },
	 {
	 	name: "gpac",
	 	marker: {lat:39.899921847295396, lng:-80.18788055476979},
	 	polygon:[
	 	{ lat: 39.90003, lng: -80.18801},
    	{ lat: 39.90002, lng: -80.18771},
    	{ lat: 39.89980, lng: -80.18772},
    	{ lat: 39.89981, lng: -80.18802},
    	{ lat: 39.90003, lng: -80.18801}
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Goodwin Performing Arts Center</h1>The Goodwin Performing Arts Center houses the University’s drama and music programs. The 250-seat auditorium is the site of cultural and arts programs for the campus and the community. Students can come here and enjoy the school musicals, plays, and WU's Line.</p></div>",
	    color: "#b6b6b8",
	    icon: "gpac.png"
	 },
	 {
	 	name: "fieldhouse",
	 	marker: {lat:39.89800606361602, lng:-80.18755939392238},
	 	polygon:[
	 	{ lat: 39.89822129557472, lng: -80.18785727074538 },
    	{ lat: 39.89821720506465, lng: -80.18727432259585 },
    	{ lat: 39.89798540909532, lng: -80.18727609987678 },
    	{ lat: 39.89798677260331, lng: -80.18785904802633 },
    	{ lat: 39.89822129557472, lng: -80.18785727074538 }
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Rudy Marisa Fieldhouse</h1>The Rudy Marisa Fieldhouse. Named for former head basketball coach and Director of Athletics Rudy Marisa, this facility houses the Department of Athletics, two gymnasiums, locker rooms, weight room, wrestling room and fitness center. The primary gymnasium, located on the west side of the building, holds a 1,350 seating capacity for basketball, wrestling and volleyball.</p></div>",
	    color: "#b6b6b8",
	    icon: "wiley.png"
	 },
	 {
	 	name: "caf",
	 	marker:{lat:39.900411348104846, lng: -80.18793376685979},
	 	polygon:[
	 	{lat:39.90059175354509, lng:-80.18816030330875},
	 	{lat: 39.90059175354509, lng:-80.18809744016778},
	 	{lat:39.900673916303504, lng:-80.18808579884539},
	 	{lat:39.90067213015761, lng:-80.18796472909241},
	 	{lat:39.90058460895274, lng:-80.18797171388584},
	 	{lat:39.90057567821125, lng:-80.18770396347063},
	 	{lat:39.90019165522661, lng:-80.18773190264439},
	 	{lat:39.90020594449249, lng:-80.18818125768907},
	 	{lat:39.90059175354509, lng:-80.18816030330875}
	 	],
	 		description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Benedum Cafeteria</h1>The Benedum Cafeteria is where students can get an all you can eat buffet of food. Whether it's good or not, is up to you.</p></div>",
	    color: "#b6b6b8",
	    icon: "food.png"
	 },
	 {
	 	name: "stover",
	 	marker:{lat:39.899890751845604, lng:-80.1862064242841},
	 	polygon:[
	 	{lat: 39.89999427537623, lng:-80.18639717039527},
	 	{lat: 39.899993760951894, lng: -80.18635827836418},
	 	{lat: 39.90002822737523, lng: -80.18635693725966},
	 	{lat: 39.900022568709886, lng:-80.18596667584431},
	 	{lat: 39.89976381287705, lng: -80.18597673412829},
	 	{lat: 39.899767928285605, lng: -80.18636632499137},
	 	{lat: 39.89980239482252, lng: -80.18636565443911},
	 	{lat:39.89980239482252, lng: -80.1864045464702},
	 	{lat: 39.89999427537623, lng: -80.18639717039527}
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Stover Campus Center</h1>The Stover Campus Center is where students can come and enjoy various meals, a Starbucks drink, or pick up a snack from the student store. Located in Stover is the student activities board, student services, counseling center, residence life, campus ministry office, and the bonner scholars office.</p></div>",
	    color: "#b6b6b8",
	    icon: "food.png"
	 },
	 {
	 	name: "miller",
	 	marker: {lat:39.899396425617795, lng:-80.18751319796316},
	 	polygon:[
	 	{lat:39.89956161703845, lng:-80.18779665011526},
	 	{lat:39.89956058818326, lng:-80.18759146112367},
	 	{lat: 39.89959505482446, lng: -80.18759079057142},
	 	{lat: 39.899593511542385, lng: -80.18743790465612},
	 	{lat: 39.89956161703845, lng: -80.18743790465612},
	 	{lat: 39.89955955932746, lng:-80.18722869235273},
	 	{lat: 39.89939957215151, lng:-80.18722869235273},
	 	{lat:39.89939905772269, lng:-80.18741510588103},
	 	{lat: 39.89937487956375, lng: -80.18741510588103},
	 	{lat: 39.89937487956375, lng: -80.18742315250815},
	 	{lat: 39.899366648699186, lng: -80.1874238230604},
	 	{lat: 39.89936767755731, lng: -80.18760554272288},
	 	{lat: 39.89937487956375, lng: -80.18760487217061},
	 	{lat: 39.89937487956375, lng:-80.18761560100678},
	 	{lat: 39.8993933990054, lng:-80.18761560100678},
	 	{lat: 39.89939597114964, lng: -80.1877993323238},
	 	{lat: 39.89956161703845, lng: -80.18779665011526},
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Miler Hall</h1>Miller Hall is the main administration building of Waynesburg University. This four-story, red brick structure houses administrative offices, Education Department offices and classrooms, two conference rooms, one of which is named for the distinguished alumnus, General Edward Martin, 1901, and the Paul R. Stewart Museum. Miller Hall resides on the National Registry for Historic Places. If you are looking for President Lee, you will find him in Miller Hall!</p></div>",
	    color: "#b6b6b8",
	    icon: "building.png"
	 },
	 {
	 	name: "eberly",
	 	marker: {lat: 39.899884578742494, lng: -80.1853534818427},
	 	polygon:[
	 	{lat: 39.899922770354294, lng: -80.18553282853959},
	 	{lat: 39.8999222559294, lng:-80.18550600644919},
	 	{lat: 39.89994283292212, lng: -80.18550533589693},
	 	{lat: 39.89994283292212, lng: -80.18549728926982},
	 	{lat: 39.9000524053043, lng: -80.18549326595624},
	 	{lat:39.90005034760858,lng: -80.18533702727966},
	 	{lat: 39.90004417452111, lng: -80.18533635672739},
	 	{lat: 39.90004160240115, lng: -80.18518950578245},
	 	{lat: 39.89993923194808, lng: -80.18519285854521},
	 	{lat: 39.89993768867374, lng: -80.1851861530226},
	 	{lat: 39.899848178703685, lng: -80.18518816467937},
	 	{lat: 39.89984658769828, lng: -80.1851625027092},
	 	{lat: 39.89970049070834, lng: -80.18516786712725},
	 	{lat: 39.899702548414545, lng: -80.18530600089281},
	 	{lat: 39.89968402905644, lng: -80.18530600089281},
	 	{lat: 39.89968505790979, lng: -80.18535025734197},
	 	{lat: 39.899704606120686, lng: -80.18535025734197},
	 	{lat: 39.8997071782536, lng: -80.18550381380766},
	 	{lat: 39.89981932314095, lng: -80.1854997904941},
	 	{lat: 39.89981932314235, lng: -80.18550783712094},
	 	{lat:39.89984247229349, lng: -80.18550582546415},
	 	{lat: 39.89984350114448, lng: -80.18553398865906},
	 	{lat: 39.899922770354294, lng: -80.18553282853959}
	 	],
	 	description:
	 	"<div class='modal'><h1 class='descriptionTitle'>Eberly Library</h1>The Eberly Library is open from 7:30 a.m. to midnight, Monday through Thursday, with reduced hours on the weekends. The library’s physical collection is composed of over 75,000 print books and over 220,000 online books; also available for circulation are 2,200 compact disk sets, and more than 2,000 films on DVD. The library also provides access to full text articles in thousands of journals online. On the third foor of the library is the writing center where students can get help with their writing assignments. The library also offers free prinitng in black and white to all students. Students can also use the library computers to work on Adobe software. </p></div>",
	    color: "#b6b6b8",
	    icon: "library.png"
	 }
]

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
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#3f9e40"
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
                "visibility": "off"
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
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
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
                "color": "#3d773c"
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
                "color": "#bfa670"
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
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#79d6c3"
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


