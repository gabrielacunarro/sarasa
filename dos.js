/* Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. */
function mostrar() {

  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let promedioAlumno;
  let edad;

  //a
  let mejorPromedioFisic;
  let nombreMejorPromedioFisic;
  let flagMejorPromedioFisic = 1;

  //b
  let nombreAlumnaMasJoven;
  let edadAlumnaMasJoven;
  let flagAlumnaMasJoven = 1;
  let cont_alumna=0;

  //c

  let cont_quimica = 0;
  let cont_fisica = 0;
  let cont_sistemas = 0;
  let cont_total = 0;
  let porcent_quimica;
  let porcent_fisica;
  let porcent_sistemas;

  //d
  let flagMasMaterias = 1;
  let edadAlumnoMasMaterias;
  let nombreAlumnoMasMaterias;
  let estudianteMasMaterias;

  for (let i = 0; i < 500; i++) {

    nombre = prompt("Ingrese nombre");

    carrera = prompt("Ingrese carrera quimica/fisica/sistemas").toLowerCase();
    while (!(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")) {
      carrera = prompt("Dato invalido reingrese carrera quimica/fisica/sistemas").toLowerCase();
    }
    sexo = prompt("Ingrese sexo f/m/nb").toLowerCase();
    while (!(sexo == "f" || sexo == "m" || sexo == "nb")) {
      sexo = prompt("Dato invalido, reingrese sexo f/m/nb").toLowerCase();
    }
    cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias "));
    while (!(cantidadMaterias > 0 && cantidadMaterias < 6)) {
      cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias "));
    }
    promedioAlumno = parseFloat(prompt("Ingrese promedio entre 0 y 10 "));
    while (!(promedioAlumno >= 0 && promedioAlumno < 11)) {
      promedioAlumno = parseFloat(prompt("Dato invalido, reinngrese promedio entre 0 y 10 "));
    }
    edad = parseInt(prompt("Ingrese edad "));
    while (!(edad > 0)) {
      edad = parseInt(prompt("Dato invalido, reinngrese edad "));
    }

    if (carrera == "quimica") {
      cont_quimica++;
    } else if (carrera == "fisica") {
      cont_fisica++;
    } else {
      cont_sistemas++;
    }

    //a
    if (flagMejorPromedioFisic || promedioAlumno > mejorPromedioFisic && carrera == "fisica") {
      mejorPromedioFisic = promedioAlumno;
      nombreMejorPromedioFisic = nombre;
      flagMejorPromedioFisic = 0;
    }
    //b
    if (flagAlumnaMasJoven || edad < edadAlumnaMasJoven && sexo == "f") {
      edadAlumnaMasJoven = edad;
      nombreAlumnaMasJoven = nombre;
      cont_alumna++;
      flagAlumnaMasJoven = 0;
    }
    //d
    if (flagMasMaterias || cantidadMaterias > estudianteMasMaterias) {
      estudianteMasMaterias = cantidadMaterias;
      edadAlumnoMasMaterias = edad;
      nombreAlumnoMasMaterias = nombre;
      flagMasMaterias = 0;

    }

  }//fin bucle

  cont_total = cont_fisica + cont_quimica + cont_sistemas;

  //a
  if (cont_fisica != 0) {
    document.write("El nombre del mejor promedio de los alumnos que estudian Fisica " + nombreMejorPromedioFisic + "<br>");
  }

  //b
 if(cont_alumna !=0){
    document.write("El nombre de la alumna mas joven " + nombreAlumnaMasJoven + "<br>");
  }

  //c
  if (cont_quimica != 0) {
    porcent_quimica = cont_quimica * 100 / 500;
    document.write("Porcentaje de estudiantes que estudia quimica " + cont_quimica + "%" + "<br>");
  }
  if (cont_fisica != 0) {
    porcent_fisica = cont_fisica * 100 / 500;
    document.write("Porcentaje de estudiantes que estudia fisica " + cont_fisica + "%" + "<br>");
  }
  if (cont_sistemas != 0) {
    porcent_sistemas = cont_sistemas * 100 / 500;
    document.write("Porcentaje de estudiantes que estudia sistemas " + cont_sistemas + "%" + "<br>");
  }
  //d
  document.write("Del estudiante que cursa mas materias exceptuando la carrera de Quimica la edad es " + edadAlumnoMasMaterias + " y el nombre es :" + nombreAlumnoMasMaterias + "<br>");




}
