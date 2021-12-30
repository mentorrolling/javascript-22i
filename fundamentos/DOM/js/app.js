let contenedor = document.querySelector("#root");

let titulo = document.createElement("h1");
titulo.innerText = "Ejercicio del DOM";

let imagen = document.createElement("img");
imagen.src = "https://hourofcode.com/images/hora-del-codigo-en-vivo.png";
imagen.width = "200";

let tabla = document.createElement("table");
tabla.classList = "table";

tabla.innerHTML = `<thead>
<tr>
<th>Nombre</th>
<th>Apellido</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pablo</td>
<td>Marino</td>
</tr>
<tr>
<td>Fabrizio</td>
<td>Tonin</td>
</tr>
<tr>
<td>Pablo</td>
<td>Frias</td>
</tr>
</tbody>
`;

const usuarios = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

const crearTarjetas = function () {
  usuarios.map(function (usuario) {
    let div = document.createElement("div");
    div.classList = "col";

    let tarjeta = `
<div class="card h-100">
  <img src=${usuario.avatar} class="card-img-top img-card" alt=${usuario.first_name}>
  <div class="card-body">
    <h5 class="card-title">${usuario.first_name} ${usuario.last_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <small class="text-muted">${usuario.email}</small>
  </div>
</div>
`;
    div.innerHTML = tarjeta;
    document.querySelector("#container_card").appendChild(div);
  });
};

contenedor.append(titulo, imagen, tabla);
crearTarjetas();
