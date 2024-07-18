/*Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas 
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 10$. 
y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total pagado 
por horas extras y nombre del trabajador con el menor salario obtenido. 
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas regular, 
números de horas extra) (Mary, 30, 10), (José, 35, 5), (Carlos, 35, 0), (Pedro, 25, 10)  */

import Empresa from "./Empresa.js";
import Trabajador from "./Trabajador.js";

let tra1 = new Trabajador("Mary", 30, 10);
let tra2 = new Trabajador("José", 35, 5);
let tra3 = new Trabajador("Carlos", 35, 0);
let tra4 = new Trabajador("Pedro", 25, 10);

let empresa = new Empresa();

empresa.procesarTrabajador(tra1);
empresa.procesarTrabajador(tra2);
empresa.procesarTrabajador(tra3);
empresa.procesarTrabajador(tra4);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados:<br><br>`;
salida.innerHTML += `Monto total pagado por horas extras: $${empresa.devolverTotal()}`;
salida.innerHTML += `<br>Nombre del trabajador con menor salario obtenido: ${empresa.devolverNomMenor()} con un salario de $${empresa.devolverMenorSalario()}`;
