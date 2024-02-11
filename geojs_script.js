function fetchGeolocation() {
  fetch("https://ipv4.geojs.io/v1/ip/geo.json")
    .then((response) => response.json())
    .then((data) => displayGeolocation(data));

    // Break and Display Info
    document.getElementById("animated").style.animation = "growShrink 1s infinite ease-in-out alternate";
    document.getElementById("finder").textContent = "Searching...";
    setTimeout(function () {
      document.getElementById("search").style.display = "none";
      document.getElementById("mainFrame").style.display = "block";
    }, 4000);
}

function displayGeolocation(data) {
  // Optional Objects
  var country_code3 = data.country_code3;
  var accuracy = data.accuracy;

  // Set Text
  document.getElementById("ip").innerHTML = data.ip;
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("latitude").innerHTML = data.latitude;
  document.getElementById("longitude").innerHTML = data.longitude;
  document.getElementById("region").innerHTML = data.region;
  document.getElementById("city").innerHTML = data.city;
  document.getElementById("asn").innerHTML = data.asn;
  document.getElementById("org").innerHTML = data.organization_name;
  document.getElementById("timezone").innerHTML = data.timezone;
  document.getElementById("flag").src = `https://countryflagsapi.netlify.app/flag/${data.country_code}.svg`;
}