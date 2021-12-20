
let textTarea = document.querySelector('#text_task');
let cards = document.querySelector('#cards');
let contador = document.querySelector('#total');

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const agregarTarea=function() {
    if (textTarea.value) {
     tareas.push(textTarea.value);
     textTarea.value="";
     textTarea.focus();
     localStorage.setItem("tareas", JSON.stringify(tareas)); 
     actualizarLista();
    };
};

const crearCardTarea=function(){

    tareas.map(function(tarea, index){

        const card=document.createElement('div');
        card.classList="card"

        let card_tarea=`
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
            <h4>:&#128205
            : ${tarea}</h4>
            </div>
            <div>
                <button class="btn btn-danger" onclick="borrarTarea(${index})">X</button>
            </div>
        </div>
        `;
        card.innerHTML =card_tarea;
        cards.appendChild(card);
    });
};

const actualizarLista=function() {
    cards.innerHTML =""
    crearCardTarea()
    contador.innerHTML=`<b>Total: </b> ${tareas.length}`
    ;
};

const borrarTarea = function(id) {

    tareas.splice(id,1);
    actualizarLista();
};


textTarea.addEventListener('keypress', function (e) {
    //console.log(e);
if(e.keyCode===13) {
    agregarTarea()
}
});

//================================

let user = {
    nombre: "Pablo",
    apellido: "Marino",
};

console.log(user);

let texto = JSON.stringify(user);

console.log(texto);
console.log(JSON.parse(user));

//==============================

let usuarios = JSON.parse(localStorage.getItem("navidad")) || [];

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };
};

function crear () {
    let nombre = prompt("Ingrese Nombre");
    let apellido = prompt("Ingrese Apellido");
    let usuario = new Usuario(nombre, apellido);
    usuarios.push(usuario);

    localStorage.setItem("navidad", JSON.stringify(usuarios));
};

