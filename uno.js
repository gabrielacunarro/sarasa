/*Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad */
function mostrar() {

  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let respuesta;
  //a
  let acuEdadReptil = 0;
  let cont_reptil = 0;
  let promEdadReptil;
  //b
  let tipoMascotaMasJoven;
  let sexoMascotaMasJoven;
  let edadMascotaMasJoven;
  let flagMascotaMasJoven = 1;
  //c
  let contTotalMascotas = 0;
  let cont_aves = 0;
  let porcent_aves;
  //d comparar cont_tipos
  let cont_mamifero = 0;


  do {
    nombre = prompt("Ingresar nombre de la mascota").toLowerCase();
    while (!(nombre.length >= 3 && nombre.length <= 8)) {
      nombre = prompt("Dato invalido, reingresar nombre de la mascota").toLowerCase();
    }
    tipo = prompt("Ingrese tipo de mascota mamifero/ave/reptil").toLowerCase();
    while (!(tipo == "mamifero" || tipo == "ave" || tipo == "reptil")) {
      tipo = prompt("Dato invalido, reingrese tipo de mascota mamifero/ave/reptil").toLowerCase();
    } if (tipo == "reptil") {
      sangre == "fria";
      alert("Si la mascota solo puede ser de sangre fria si es un reptil");
    }
    else {
      sangre == "calida";
      alert("Si la mascota es un mamifero o ave solo puede ser de sangre calida");
    }

    edad = parseInt(prompt("Ingrese edad de la mascota "));
    while (!(edad > 0)) {
      edad = parseInt(prompt("Dato invalido reingrese edad de la mascota "));
    }
    sexo = prompt("Ingrese sexo Ingrese sexo M para macho y H para hembra ").toLowerCase();
    while (!(sexo == "m" || sexo == "h")) {
      sexo = prompt("Dato invalido, reingrese sexo M para macho y H para hembra ").toLowerCase();
    }

    if (tipo == "mamifero") {
      cont_mamifero++;
    } else if (tipo == "ave") {
      cont_aves++;
    } else {
      cont_reptil++;
      acuEdadReptil += edad;
    }
    //b
    if (flagMascotaMasJoven || edad < edadMascotaMasJoven) {
      edadMascotaMasJoven = edad;
      tipoMascotaMasJoven = tipo;
      sexoMascotaMasJoven = sexo;
      flagMascotaMasJoven = 0;

    }
    //c
    contTotalMascotas = cont_mamifero + cont_reptil + cont_aves;

    //d
    if (cont_mamifero > cont_aves && cont_mamifero > cont_reptil) {
      tipo == "mamifero";
    } else if (cont_aves >= cont_mamifero && cont_aves > cont_reptil) {
      tipo == "ave";
    } else {
      tipo == "reptil";
    }

    respuesta = prompt("Quiere ingresar otra mascota? si/no");
  } while (respuesta == "si");

  //a

  promEdadReptil = acuEdadReptil / cont_reptil;
  document.write("El promedio de edad de los reptiles es: " + promEdadReptil + "<br>");

  //b
  document.write("La mascota mas joven es del tipo : " + tipoMascotaMasJoven + " y del sexo " + sexoMascotaMasJoven + "<br>");

  //c

  porcent_aves = cont_aves * 100 / contTotalMascotas;
  document.write("Del total de las mascotas un " + porcent_aves + "% " + " son aves" + "<br>");

  //d
  document.write("Del tipo de mascota que hay mas cantidad es de: " + tipo + "<br>");











}
