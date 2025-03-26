import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get(
      `https://nominatim.openstreetmap.org/search?q=${encodeURI(
        enteredAddress
      )}&format=json`
    )
    .then((response) => {
      const data = response.data[0];
      const lat = data.lat;
      const long = data.lon;

      const coordinates = { lat: lat, long: long };
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
