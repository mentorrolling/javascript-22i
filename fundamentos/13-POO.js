class Usuario {
  constructor(nombre, username, password) {
    this.nombre = nombre;
    this.username = username;
    this.password = password;
  }
  presentacion() {
    console.log("======Tarjeta de presentación======");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`UserName: ${this.username}`);
  }
}

const user1 = new Usuario("Pablo", "pmarino", "123456");
const user2 = new Usuario("Gonzalo", "gwinner", "ABC123");

class Administrador extends Usuario {
  constructor(nombre, username, password, puesto, activo = true) {
    super(nombre, username, password);
    this.puesto = puesto;
    this.activo = activo;
  }

  cambiarActivo() {
    this.activo = !this.activo;
  }

  saludarAdmin() {
    super.presentacion();
    console.log(`Puesto: ${this.puesto}`);
  }
}

const admin1 = new Administrador(
  "Miqueas",
  "miqueas2021",
  "12345678",
  "Gerente regional"
);

/*
    
    Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    Una propiedad titular.
    Una propiedad saldo, teniendo como valor inicial 0.
    Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    Un método extraer() que permita retirar la cantidad pasada como parámetro.
    Un método informar() que retorne la información del estado de la cuenta. 
    
    Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
    Rectángulos
    
    */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor) {
    this.saldo += valor;
  }
  extraer(valor) {
    if (valor < this.saldo) {
      this.saldo -= valor;  
    }else{
      console.error(`No tienes saldo disponible. Tu saldo es de ${this.saldo}`)
    }
    
  }
  informar() {
    console.log("====Datos de la cuenta====");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
  }
}
