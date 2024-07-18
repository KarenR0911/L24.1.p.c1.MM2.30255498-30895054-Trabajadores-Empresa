export default class Empresa {
  constructor() {
    this.acumTotal = 0;
    this.menorSalario = 9999;
    this.auxNombre = "";
  }
  procesarTrabajador(tra) {
    this.acumTotal += tra.calcHoraExtra();
    if (tra.calcTotal() < this.menorSalario) {
      this.menorSalario = tra.calcTotal();
      this.auxNombre = tra.nombre;
    }
  }
  devolverTotal() {
    return this.acumTotal;
  }
  devolverNomMenor() {
    return this.auxNombre;
  }
  devolverMenorSalario() {
    return this.menorSalario;
  }
}
