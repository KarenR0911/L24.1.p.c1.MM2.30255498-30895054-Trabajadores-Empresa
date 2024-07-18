export default class Trabajador {
  constructor(nom, hR, hEx) {
    this.nombre = nom;
    this.horaRegular = hR;
    this.horaExtra = hEx;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set horaRegular(hR) {
    this._horaRegular = hR;
  }
  set horaExtra(hEx) {
    this._horaExtra = hEx;
  }
  get nombre() {
    return this._nombre;
  }
  get horaRegular() {
    return this._horaRegular;
  }
  get horaExtra() {
    return this._horaExtra;
  }
  calcHoraRegular() {
    return this._horaRegular * 10;
  }
  calcHoraExtra() {
    return this._horaExtra * 25;
  }
  calcTotal() {
    return this.calcHoraRegular() + this.calcHoraExtra();
  }
}
