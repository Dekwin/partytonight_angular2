export class EventTransactionEntity {
  private _userId: number;
  private _userName: string;
  private _ticketsSubtotal: number;
  private _tablesSubtotal: number;
  private _bottlesSubtotal: number;
  private _subtotal: number;


  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get ticketsSubtotal(): number {
    return this._ticketsSubtotal;
  }

  set ticketsSubtotal(value: number) {
    this._ticketsSubtotal = value;
  }

  get tablesSubtotal(): number {
    return this._tablesSubtotal;
  }

  set tablesSubtotal(value: number) {
    this._tablesSubtotal = value;
  }

  get bottlesSubtotal(): number {
    return this._bottlesSubtotal;
  }

  set bottlesSubtotal(value: number) {
    this._bottlesSubtotal = value;
  }

  get subtotal(): number {
    return this._subtotal;
  }

  set subtotal(value: number) {
    this._subtotal = value;
  }


  constructor(userId: number, userName: string, ticketsSubtotal: number, tablesSubtotal: number, bottlesSubtotal: number, subtotal: number) {
    this._userId = userId;
    this._userName = userName;
    this._ticketsSubtotal = ticketsSubtotal;
    this._tablesSubtotal = tablesSubtotal;
    this._bottlesSubtotal = bottlesSubtotal;
    this._subtotal = subtotal;
  }
}
