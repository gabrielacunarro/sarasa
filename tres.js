/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */

function mostrar() {
  let tipo;
  let origen;
  let precio;

  //a comparar contadores de tipos de juguetes
  let cont_muñeca = 0;
  let cont_rompecabezas = 0;
  let cont_pelota = 0;
  let masVendido;

  //b  importado promedio precio 
  let cont_importado = 0;
  let acu_importado = 0;
  let prom_precio_importados;

  //c recaudacion total 
  let acu_nacional = 0;
  let recaudacion_total;

  //d precio rompecabezas NACIONAL mas barato 
  let precioRompeMasBarato;
  let flagRompeMasBarato = 1;

  //e 
  let iva;


  do {

    tipo = prompt("Ingrese tipo de juguete muñeca/rompecabezas/pelota ").toLowerCase();
    while (!(tipo == "muñeca" || tipo == "rompecabezas" || tipo == "pelota")) {
      tipo = prompt("Dato incorrecto, reingrese tipo de juguete muñeca/rompecabezas/pelota ").toLowerCase();
    }
    origen = prompt("Ingrese origen del juguete nacional/importado").toLowerCase();
    while (!(origen == "nacional" || origen == "importado")) {
      origen = prompt("Dato incorrecto, reingrese origen del juguete nacional/importado").toLowerCase();
    }
    precio = parseFloat(prompt("Ingrese precio del juguete entre 1000 y 5000"));
    while (!(precio >= 1000 && precio <= 5000)) {
      precio = parseFloat(prompt("Dato invalido, reingrese precio del juguete entre 1000 y 5000"));
    }

    if (tipo == "muñeca") {
      cont_muñeca++;
    } else if (tipo == "rompecabezas") {
      cont_rompecabezas++;
    } else {
      cont_pelota++;
    }

    //a
    if (cont_muñeca > cont_rompecabezas && cont_muñeca > cont_pelota) {
      masVendido = "muñeca";
    } else if (cont_rompecabezas >= cont_muñeca && cont_rompecabezas > cont_pelota) {
      masVendido = "rompecabezas";
    } else {
      masVendido = "pelota";
    }

    //b 
    if (origen == "importado") {
      acu_importado += precio;
      cont_importado++;
    } else {
      acu_nacional += precio;
    }

    //d
    if (flagRompeMasBarato || origen == "nacional" && tipo == "rompecabezas" && precio < precioRompeMasBarato) {
      precioRompeMasBarato = precio;
      flagRompeMasBarato = 0;
    }

    respuesta = prompt("Quiere seguir ingresando datos? si/no");
  } while (respuesta == "si");

  //a
  document.write("El tipo de juguete mas vendido es: " + masVendido + "<br>");

  //b
  
  if (cont_importado != 0) { 
    prom_precio_importados = acu_importado / cont_importado;
  }
  document.write("El promedio de precio de los juguetes importados es de: $" + prom_precio_importados + "<br>");

  //c
  recaudacion_total = acu_importado + acu_nacional;
  document.write("La recaudacion total es de $" + recaudacion_total + "<br>");

  //d
  if (flagRompeMasBarato) {
    document.write("No se registro compra de rompecabezas de origen nacional" + "<br>");
  } else {
    document.write("El precio del rompecabezas nacional mas barato es de $" + precioRompeMasBarato + "<br>");
  }
  //e

  iva = recaudacion_total * 0.21;
  document.write("Se percibio de iva en total: $" + iva +"<br>");















}
