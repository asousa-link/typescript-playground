import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  type OSMGeocodingResponse = {
    // place_id: number;
    // licence: string;
    // osm_type: string;
    // osm_id: number;
    lat: string;
    lon: string;
    // class: string;
    // type: string;
    // place_rank: number;
    // importance: number;
    // addresstype: string;
    name: string;
    display_name: string;
    boundingbox: string[];
  }[];

  axios
    .get<OSMGeocodingResponse>(
      `https://nominatim.openstreetmap.org/search?q=${encodeURI(
        enteredAddress
      )}&format=json`
    )
    .then((response) => {
      const data = response.data[0];
      const lat = data.lat;
      const long = data.lon;

      const coordinates = { lat: lat, long: long };
      console.log(`COORDINATES: ${coordinates.lat} ${coordinates.long}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
