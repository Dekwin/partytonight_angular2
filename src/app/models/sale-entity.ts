export class SaleEntity {
  private _eventId: number;
  private _eventName: string;
  private _withdrawn: string;
  private _refunds: string;
  private _ticketsSales: string;
  private _bottleSales: string;
  private _tableSales: string;


  get eventId(): number {
    return this._eventId;
  }

  set eventId(value: number) {
    this._eventId = value;
  }

  get eventName(): string {
    return this._eventName;
  }

  set eventName(value: string) {
    this._eventName = value;
  }

  get withdrawn(): string {
    return this._withdrawn;
  }

  set withdrawn(value: string) {
    this._withdrawn = value;
  }

  get refunds(): string {
    return this._refunds;
  }

  set refunds(value: string) {
    this._refunds = value;
  }

  get ticketsSales(): string {
    return this._ticketsSales;
  }

  set ticketsSales(value: string) {
    this._ticketsSales = value;
  }

  get bottleSales(): string {
    return this._bottleSales;
  }

  set bottleSales(value: string) {
    this._bottleSales = value;
  }

  get tableSales(): string {
    return this._tableSales;
  }

  set tableSales(value: string) {
    this._tableSales = value;
  }


  constructor(eventId: number, eventName: string, withdrawn: string, refunds: string, ticketsSales: string, bottleSales: string, tableSales: string) {
    this._eventId = eventId;
    this._eventName = eventName;
    this._withdrawn = withdrawn;
    this._refunds = refunds;
    this._ticketsSales = ticketsSales;
    this._bottleSales = bottleSales;
    this._tableSales = tableSales;
  }
}
