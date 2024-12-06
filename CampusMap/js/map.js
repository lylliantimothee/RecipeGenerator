// Let's create a database of interesting places
const placeDB = [
    {
        name: "UCSC Organic Farm Stand",
        location: [36.98289481428539, -122.0543879280048],
        description: "This peaceful shrine is a great place to meditate, reflect, or just take a break from the hustle and bustle of campus life.",
        icon: "temp",
        image: "temp.png"
    },
    {
        name: "Redwood Free Market",
        location: [36.99308428595387, -122.0644774463934],
        description: "Caer Ellillon is a sacred circle that has four direction altars and a large totem pole. <i>Caer</i> means santuary and <i>Ellilon</i> can mean Gods or Elves. In this case, it is a dedication to the earth spirits of the forest and of nature.",
        icon: "temp",
        image: "temp.png"
    },
    {
        name: "Porter Market",
        location: [36.99634199635114, -122.06511037067514],
        description: "Take a walk through one of the Wilder Ranch meadows and down into the gulch to brave IXL/Hellhole cave.",
        icon: "temp",
        image: "temp.png"
    },
    {
        name: "Merrill Market",
        location: [37.00180366763297, -122.05280076477922],
        description: "This library is one of the largest on the West Coast. It has a variety of resources, including books, journals, and databases. It's a great place to study or do research.",
        icon: "temp",
        image: "temp.png"
    }   
    
];
            
const imgDir = "img/";
const mapCenter = [36.99809807995018, -122.05589273233338];
const mapZoom = 15; // 1 = whole world, 10 = large city, 20 = city blocks
const mapMaxZoom = 18;
const mapMinZoom = 13;

// Set up the map
const map = L.map('map').setView(mapCenter, mapZoom);

// Set up the map filters
let myFilter = [
    'grayscale:100%',
    // 'contrast:90%',
    'sepia:35%',
    // 'brightness:110%',
];

// Add the basemap tiles
const mapLayer = L.tileLayer.colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    filter: myFilter
}).addTo(map);

const iconDir = "img/";
const iconSize = [48, 48];
const iconAnchor = [16, 32];
const popupAnchor = [0, -32];
// all icons as pngs in img/icons
// custom markers include:
const iconNames = [];
for (const place of placeDB) {
  iconNames.push(place.icon);
}
// iterate over iconNames to create an object of L.icon objects
const icons = {};
iconNames.forEach(function(iconName) {
    icons[iconName] = L.icon({
        iconUrl: iconDir + iconName + '.png',
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor
    });
});

// Add markers for each place
placeDB.forEach(function(place) {
    const marker = L.marker(place.location, {icon: icons[place.icon]}).addTo(map);
    marker.bindPopup(
        '<h3>' + place.name + '</h3>' +
        '<img src="' + imgDir + place.image + '" alt="' + place.name + '" width="300" height="200">' +
        '<p>' + place.description + '</p>'
    );
});

