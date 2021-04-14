var bMapAPIKey =
  "ApRYAJ3KLzZb23MFEOAOAA3oIlaI0Z56ShmEVSfJw4Rpi-4uRFCRaTqtAh8fmQRg";

function GetMap() {
  var map = new Microsoft.Maps.Map("#bing-map", {
    credentials:
      "ApRYAJ3KLzZb23MFEOAOAA3oIlaI0Z56ShmEVSfJw4Rpi-4uRFCRaTqtAh8fmQRg",
    center: new Microsoft.Maps.Location(41.10655, -80.64792),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 15,
  });

  infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
    visible: false,
  });

  infobox.setMap(map);

  var center = map.getCenter();

  var pin = new Microsoft.Maps.Pushpin(center, {
    title: "Mickeys Pizzeria",
    subTitle: "Actually Youngstown State University",
    text: "1",
  });
  pin.metadata = {
    title: "Mickeys Pizzeria",
    description: "1 University Plaza<br>Youngstown, OH 44502",
  };

  Microsoft.Maps.Events.addHandler(pin, "click", pushpinClicked);

  map.entities.push(pin);

  function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true,
      });
    }
  }
}
