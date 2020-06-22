const url = "https://www.suzukimotos.cl/wp-json/wp/v2/concesionarios";
const lista = document.getElementById("lista");
const fragment = document.createDocumentFragment();
let coordenadas = [];
let marker;
let markers = [];

/* Dibujar Mapa y centrarlo en las coordenadas de Santiago de Chile */
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 10,
  center: { lat: -33.45694, lng: -70.64827 },
});

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    /* Constructor de los elementos li, checkbox y input */
    data.map((element) => {
      const li = document.createElement("li");

      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", element.id);
      input.setAttribute("name", element.id);

      const label = document.createElement("label");
      label.setAttribute("for", element.id);
      label.textContent = element["cn-map"].address;

      li.appendChild(input);
      li.appendChild(label);
      fragment.appendChild(li);
    });

    lista.appendChild(fragment);

    /* Marcador de las ubicaciones de cada direccion a traves de la latitud y longitud*/
    data.forEach((element) => {
      let latitud = parseFloat(element["cn-map"].lat); //guarda la coordenda
      let longitud = parseFloat(element["cn-map"].lng);

      coordenadas.push({ lat: latitud, lng: longitud }); // almacena la coodenada en un array
    });

    /*Dibuja en el mapa cada ubicacion a traves del array de coordenadas */
    coordenadas.forEach((element) => {
      markers.push(
        new google.maps.Marker({
          position: element,
          map: map,
          icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" },
        })
      );
    });

    checkMarker(data);
  })
  .catch((err) => console.log(err));

// Funcion para el marcaje y desmarcaje
const checkMarker = (datos) => {
  lista.addEventListener("change", (e) => {
    //colores del icono de las marcas
    const icon = `http://maps.google.com/mapfiles/ms/icons/${
      e.target.checked ? "blue" : "red"
    }-dot.png`;

    const markerId = parseInt(e.target.id);

    //busqueda de la informacion del elemento el cual realiza el evento
    const position = datos.find(({ id }) => id === markerId)["cn-map"];

    // busqueda de la marca
    let marker = markers.find(
      (marker) =>
        marker.getPosition().lat() === +position.lat &&
        marker.getPosition().lng() === +position.lng
    );
    //cambio de color del icono
    marker.setIcon(icon);
  });
};
