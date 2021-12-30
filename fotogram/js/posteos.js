// let datos = [
//   {
//     id: 1,
//     usuario: "suzukigame",
//     detalle: "Imagen de paisaje bonito",
//     img: "https://www.nationalgeographic.com.es/medio/2021/05/05/lago-wanakanueva-zelanda_3bca218b_800x800.jpg",
//   },
//   {
//     id: 2,
//     usuario: "miraflores",
//     detalle: "Paisaje exótico",
//     img: "http://2.bp.blogspot.com/-8KuSaGEYEMs/UPSuL75AdoI/AAAAAAAAOLI/8Bb7HfkOQXU/s1600/nuevos+paisajes+floridos+con+carretera.jpg",
//   },
//   {
//     id: 3,
//     usuario: "pmarino",
//     detalle: "Paisaje vistoso",
//     img: "https://www.jardineriaon.com/wp-content/uploads/2020/11/paisajes-naturales.jpg",
//   },
// ];

// const inicializarDatos = function (datos) {
//   localStorage.setItem("posteos", JSON.stringify(datos));
// };

let datos = JSON.parse(localStorage.getItem("posteos")) || [];

let usuario = JSON.parse(localStorage.getItem("usuario"));
// console.log(usuario);

let contenedor_avatar = document.querySelector("#card_avatar");
let contenedor_cards = document.querySelector("#contenedor_cards");

// let div = document.createElement("div");
let estructura_avatar = `
<img
class="avatar"
src=${usuario.avatar}
/>
<span>${usuario.username}</span>
<p>${usuario.email}</p>
`;

// div.innerHTML = estructura_avatar;
// contenedor_avatar.appendChild(div);
contenedor_avatar.innerHTML = estructura_avatar;

const crearCards = function () {
  datos.map(function (item) {
    let card = document.createElement("div");
    card.classList = "card mb-3";

    let contenido_card = `
        <div class="card-header">${item.usuario}</div>
              <img
                src=${item.img}
                class="card-img-top"
                alt=${item.detalle}
              />
              <div class="card-body">
                ${item.detalle}
                <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
              </div>
        `;

    card.innerHTML = contenido_card;
    contenedor_cards.appendChild(card);
  });
};

crearCards();
// inicializarDatos(datos);
