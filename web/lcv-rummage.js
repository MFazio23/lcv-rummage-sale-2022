class LCVMap {
    constructor() {
        this.mapElement = document.getElementById("map");
        this.mapCenter = {lat: 43.07411085808346, lng: -88.44808750766715};
        this.defaultZoom = 15;
        this.days = ["W", "T", "F", "S"];
    }

    initMap() {
        this.map = new google.maps.Map(
            this.mapElement,
            {
                zoom: this.defaultZoom,
                center: this.mapCenter
            }
        )

        this.addCurrentLocationButton()

        if (this.locations) {
            this.loadMarkers()
        }
    }

    addCurrentLocationButton() {
        this.currentLocationButton = document.createElement('button');

        this.currentLocationUnusedImage = document.createElement('img');
        this.currentLocationUnusedImage.src = "location-target-666.png";
        this.currentLocationUnusedImage.classList.add("current-location-image");
        this.currentLocationButton.appendChild(this.currentLocationUnusedImage);

        this.currentLocationHoverImage = document.createElement('img');
        this.currentLocationHoverImage.src = "location-target-333.png";
        this.currentLocationHoverImage.classList.add("current-location-image");
        this.currentLocationButton.appendChild(this.currentLocationHoverImage);

        this.currentLocationButton.classList.add("current-location-button");

        this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(this.currentLocationButton);

        this.currentLocationButton.addEventListener('click', () => {
            this.startLocationHandling();
        })
    }

    setLocations(locations) {
        this.locations = locations;

        if (this.map) {
            this.loadMarkers()
        }
    }

    startLocationHandling() {
        if (navigator.geolocation) {
            this.updateCurrentLocationIcon();
            navigator.geolocation.watchPosition((position) => {
                this.currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                console.log(this.currentPosition);

                if (this.currentLocationMarker) {
                    this.currentLocationMarker.setMap(null)
                } else {
                    this.map.setCenter(this.currentPosition);
                    this.map.setZoom(17);
                }

                this.currentLocationMarker = new google.maps.Marker({
                    position: this.currentPosition,
                    map: this.map,
                    icon: "current-location-dot-24x24.png",
                    title: "Your current location"
                })
            });
        }
    }

    updateCurrentLocationIcon() {
        this.currentLocationUnusedImage.src = "location-target-blue.png"
        this.currentLocationHoverImage.src = "location-target-darker-blue.png"
    }

    loadMarkers() {
        const locations = Object
            .values(this.locations)
            .filter(location => !isNaN(location.latitude) && !isNaN(location.longitude));

        if (this.markers) {
            this.markers.forEach(marker => marker.setMap(null))
        } else {
            // This is the first load of the markers, let's center things.
            const bounds = new google.maps.LatLngBounds();

            locations.forEach(location => {
                bounds.extend({lat: location.latitude, lng: location.longitude})
            })

            this.map.fitBounds(bounds);
        }

        this.markers = locations.map(location => {
            const daysOpen = this.days.map(day => {
                const isOpen = location.daysOpen[day.toLowerCase()];
                return `<div class="day-open-dot ${(isOpen ? "is-open" : "")}">${day}</div>`
            }).join('\n');

            const infoWindow = new google.maps.InfoWindow({
                maxWidth: 400,
                content: `
<div>
  <h2 class="rummage-location-title">${location.address}</h2>
  <p>${location.blurb}</p>
  <div class="days-open_dots">
    ${daysOpen}
  </div>
</div>
                `
            })
            const marker = new google.maps.Marker({
                position: {lat: location.latitude, lng: location.longitude},
                map: this.map,
                title: location.address,
                label: {
                    text: location.houseId,
                    color: 'white',
                    fontFamily: 'monospace'
                },
                icon: {
                    url: './maps-poi-marker-blue-24x38.png',
                    labelOrigin: new google.maps.Point(12, 13)
                }
            });

            marker.addListener('click', () => {
                if (this.openInfoWindow && this.openInfoWindow.close) {
                    this.openInfoWindow.close();
                }
                this.openInfoWindow = infoWindow;
                infoWindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: true,
                })
            })

            return marker;
        })
    }
}

const lcvMap = new LCVMap();

const firebaseConfig = {
    apiKey: "AIzaSyArAOcko7EUxNbYuaKMMrnGeDBtyjV29yM",
    authDomain: "faziodb.firebaseapp.com",
    databaseURL: "https://faziodb.firebaseio.com",
    projectId: "faziodb",
    storageBucket: "faziodb.appspot.com",
    messagingSenderId: "643110656924",
    appId: "1:643110656924:web:e80505f101825951484659"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref("lcv-rummage-2022").on('value', (snapshot) => {
    lcvMap.setLocations(snapshot.val());
})

window.initMap = () => {
    lcvMap.initMap()
};