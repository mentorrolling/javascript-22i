class Usuario {
  constructor(nombre, username, email, password, imagen) {
    this.nombre = nombre;
    this.username = username;
    this.email = email;
    this.password = password;
    this.imagen = imagen;
  }
}

let usuarios = [];

let user1 = new Usuario(
  "Pedro",
  "pgonzalez",
  "pedritobueno@gmail.com",
  "pp123456",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3b7G544olENi0w5Nxr95EW3K3AB5a3t-mbaVh644XQIRNaRXJ2WqHAAHcJPQajU_jmo&usqp=CAU"
);

const agregarUsuario = function (user) {
  usuarios.push(user);
};

agregarUsuario(user1);

const validarDatos = function () {
  let inputEmail = document.querySelector("#input_email").value;
  let inputPassword = document.querySelector("#input_password").value;

  let validar_email = usuarios.find(function (usuario) {
    return usuario.email === inputEmail;
  });

  //   console.log(validar_email);
  if (validar_email) {
    if (validar_email.password === inputPassword) {
      console.log("Usuario encontrado");
      let datos = {
        email: validar_email.email,
        username: validar_email.username,
        avatar: validar_email.imagen,
      };
      localStorage.setItem("usuario", JSON.stringify(datos));

      location.replace("./pages/home.html");
    } else {
      alert("Email o contraseña incorrecto");
    }
  } else {
    alert("Email o contraseña incorrecto");
  }
};

document.querySelector("#formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  validarDatos();
});
