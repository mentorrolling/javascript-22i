//BOM
console.log(navigator.vendor);

const success = function (pos) {
  //   console.log(pos.coords);
  const { latitude, longitude } = pos.coords;

  console.log({
    latitud: latitude,
    longitud: longitude,
  });
};

navigator.geolocation.getCurrentPosition(success);

//-----------------------
//location

function redireccion() {
  //   location.replace("https://google.com");
  location.assign("https://rollingcodeschool.com");
}

//history----------
function irA(num) {
  history.go(num);
}

//--------------------

//setInterval
let segundero = null;
function iniciar() {
  segundero = setInterval(function () {
    //acciones
    let seg = new Date().getSeconds();
    if (seg < 10) {
      console.log("0" + seg);
    } else {
      console.log(seg);
    }
  }, 1000);
}

//clearInterval
function detener() {
  clearInterval(segundero);
}

//setTimeout
setTimeout(function () {
  //accion
  alert("Tiempo cumplido! 🤩");
}, 3000);
