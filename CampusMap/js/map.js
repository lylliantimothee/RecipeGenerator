// Let's create a database of interesting places
const placeDB = [
    {
        name: "UCSC Produce Pop Up",
        location: [36.98289481428539, -122.0543879280048],
        description: "Produce Pop Up is a twice weekly farmstand selling low cost produce grown at the UCSC Farm. On Wednesdays they are in Quarry Plaza from 11-3 and on Fridays they are located in front of the Science and Engineering Library from 11-3.",
        icon: "food-icon",
        image: "produce_pop.png"
    },
    {
        name: "Redwood Free Market",
        location: [36.99308428595387, -122.0644774463934],
        description: "Features produce, dry goods, and CalFresh information",
        icon: "food-icon",
        image: "redwood-market.jpg"
    },
    {
        name: "Porter Market",
        location: [36.99634199635114, -122.06511037067514],
        description: "offers grab-n-go meals, snacks, bottled beverages, smoothies, organic espresso drinks made-to-order, plus grocery and convenience items",
        icon: "food-icon",
        image: "porter-market.png"
    },
    {
        name: "Merrill Market",
        location: [37.00180366763297, -122.05280076477922],
        description: "offers grab-n-go meals, snacks, bottled beverages, smoothies, and organic coffee, plus grocery and convenience items.",
        icon: "food-icon",
        image: "merrill-market.jpg"
    },   
    {
        name: "Cowell Coffee Shop",
        location: [36.99732280331607, -122.05299908871285],
        description: "Cowell Coffee Shop is a non-transactional, student run cafe committed to making healthy and sustainable food accesible to students facing food insecurity.",
        icon: "food-icon",
        image: "cowell-coffee.PNG"
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
    // 'contrast:90%',
    'sepia:35%'
    // 'brightness:110%',
];

// Add the basemap tiles
const mapLayer = L.tileLayer.colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    filter: myFilter
}).addTo(map);

const iconDir = "img/";
const iconSize = [55, 55];
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


// help

