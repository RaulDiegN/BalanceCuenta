export class Pago {
  constructor(
    public id_user: number,
    public name_user: string,
    public descripcion: string,
    public fecha: string,
    public importe: number
  ) {
  }
}
