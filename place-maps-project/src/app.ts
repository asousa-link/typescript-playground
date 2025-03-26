import axios from "axios";

declare const L: any;
const ZOOM = 13;

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const map = L.map("map");

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  type NominatimGeocodingResponse = {
    features: {
      geometry: { coordinates: { lat: Number; lng: Number }[] };
      properties: {
        geocoding: { label: String };
      };
    }[];
    status: 200;
  };

  axios
    .get<NominatimGeocodingResponse>(
      `https://nominatim.openstreetmap.org/search?q=${encodeURI(
        enteredAddress
      )}&format=geocodejson&limit=1`
    )
    .then((response) => {
      console.log(response);
      if (!response.data.features.length) {
        throw new Error("Could not fetch location!");
      }

      const coordinates = [
        response.data.features[0].geometry.coordinates[1],
        response.data.features[0].geometry.coordinates[0],
      ];

      const location = {
        label: response.data.features[0].properties.geocoding.label,
      };

      map.setView(coordinates, ZOOM);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coordinates)
        .addTo(map)
        .bindPopup(`${location.label}`)
        .openPopup();
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
