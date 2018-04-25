
//Establishes currentDate, which is called in the HTML file to load the current
//text and images each day using the Date(); object
var currentDate = new Date();
console.log(currentDate);
var image;

//Series of if-statements pushes a new park depending on which day of the week it is
//With 0 being Sunday and 6 being Saturday.
if (currentDate.getDay() === 0){
    var SchenleyPlaza = new park("Schenley Plaza","Oakland",40.442947,-79.952407,
                                "great for dogs", "perfect for picnics", "no playground");
    var currentPark = Object.assign({name: "Schenley Plaza", neighborhood: "Oakland", feat1: "great for dogs", feat2: "perfect for picnics", con1: "no playground"}, SchenleyPlaza);
    console.log(currentPark);
    var myHome = {lat: 40.442947, lng: -79.952407};

    //Stores image which is then constructed in HTML
    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/rTeLcMB.jpg";
    }
}

if (currentDate.getDay() === 1){
    var SchenleyPark = new park("Schenley Park","Squirrel Hill",40.434883,-79.942510,
                                "is full of green space", "has walking trails", "has large deer population");
    var currentPark = Object.assign({name: "Schenley Park", neighborhood: "Squirrel Hill", feat1: "is full of green space", feat2: "has walking trails", con1: "has large deer population"}, SchenleyPark);
    console.log(currentPark);
    var myHome = {lat: 40.434883, lng: -79.942510};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/iaZbR89.jpg";
    }
}

if (currentDate.getDay() === 2){
    var AlleghenyCommons = new park("Allegheny Commons","North Side",40.452086,-80.010802,
                              "is full of green space", "is full of attractions", "has parkways running through");
    var currentPark = Object.assign({name: "Allegheny Commons", neighborhood: "North Side", feat1: "is full of green space", feat2: "is full of attractions", con1: "has parkways"}, AlleghenyCommons);
    console.log(currentPark);
    var myHome = {lat: 40.452086, lng: -80.010802};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/JCmf47g.jpg";
    }
}

if (currentDate.getDay() === 3){
    var FrickPark = new park("Frick Park","Point Breeze",40.436085,-79.908538, "is expansive and historic", "is perfect for hikers", "can be dangerous at night");
    var currentPark = Object.assign({name: "Frick Park", neighborhood: "Point Breeze", feat1: "is expansive and historic", feat2: "is perfect for hikers", con1: "can be dangerous at night"}, FrickPark);
    console.log(currentPark);
    var myHome = {lat: 40.436085, lng: -79.908538};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/LtMCdwY.jpg";
    }
}

if (currentDate.getDay() === 4){
    var MellonPark = new park("Mellon Park","Shadyside",40.452050, -79.919020, "has tons of shade", "is great for lunch", "is located at a busy intersection");
    var currentPark = Object.assign({name: "Mellon Park", neighborhood: "Shadyside", feat1: "has tons of shade", feat2: "is great for lunch", con1: "is located at a busy intersection"}, MellonPark);
    console.log(currentPark);
    var myHome = {lat: 40.452050, lng: -79.919020};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/Lx0Npi7.jpg";
    }
}

if (currentDate.getDay() === 5){
    var GardenOfHope = new park("Garden of Hope","The Hill District",40.452136,-79.971145, "has community gardening space", "is great for lunch", "is in an unsafe area");
    var currentPark = Object.assign({name: "Garden of Hope", neighborhood: "The Hill District", feat1: "has community gardening space", feat2: "is great for lunch", con1: "is in an unsafe area"}, GardenOfHope);
    console.log(currentPark);
    var myHome = {lat: 40.452136, lng: -79.971145};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/Cm2ANS0.jpg";
    }
}

if (currentDate.getDay() === 6){
    var ArsenalPark = new park("Arsenal Park","Lawrenceville",40.466351,-79.961222, "has playground spaces", "has tons of shade", "is not in a family-friendly area");
    var currentPark = Object.assign({name: "Arsenal Park", neighborhood: "Lawrenceville", feat1: "has playground spaces", feat2: "has tons of shade", con1: "is not in a family-friendly area"}, ArsenalPark);
    console.log(currentPark);
    var myHome = {lat: 40.466351, lng: -79.961222};

    window.onload = function(){
        document.getElementById("imageBox").src = "https://i.imgur.com/6GplqLJ.jpg";
    }
}

//Settings to format and style Google Map
function myMap() {
    var mapProp= {
        center: myHome,
        zoom:15,
        styles:    [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
            };
    var map = new google.maps.Map(googleMap,mapProp);
}

//Constructs park object
function park(name, neighborhood, lat, long, feat1, feat2, con1, image){
    this.name = name;
    this.neighborhood = neighborhood;
    this.lat = lat;
    this.long = long;
    this.feat1 = feat1;
    this.feat2 = feat2;
    this.con1 = con1;
    this.image = image;
}

