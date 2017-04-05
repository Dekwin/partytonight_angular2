export class TicketEntity {
  private _idTicket:number;
  private _price:string;
  private _available:string;
  private _booked: string;
  private _created_date:string;
  private _id_event: number;


  get idTicket():number{
      return this._idTicket;
      }

  set idTicket(value:number){
      this._idTicket=value;
      }

  get price():string{
      return this._price;
      }

  set price(value:string){
      this._price=value;
      }

  get available():string{
      return this._available;
      }

  set available(value:string){
      this._available=value;
      }

  get booked():string{
      return this._booked;
      }

  set booked(value:string){
      this._booked=value;
      }

  get created_date():string{
      return this._created_date;
      }

  set created_date(value:string){
      this._created_date=value;
      }

  get id_event():number{
      return this._id_event;
      }

  set id_event(value:number){
      this._id_event=value;
      }


  constructor(idTicket:number, price:string, available:string, booked:string, created_date:string, id_event:number) {
      this._idTicket = idTicket;
      this._price = price;
      this._available = available;
      this._booked = booked;
      this._created_date = created_date;
          this._id_event = id_event;
      }
}
