export class TableEntity {
  
  private _id_table:number;
  private _price:number;
  private _type:string;
  private _available:string;
  private _booked:string;
  private _id_event:number;


    get id_table():number {
      return this._id_table;
    }

  set id_table(value:number){
      this._id_table=value;
      }

  get price():number{
      return this._price;
      }

  set price(value:number){
      this._price=value;
      }

  get type():string{
      return this._type;
      }

  set type(value:string){
      this._type=value;
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

  get id_event():number{
      return this._id_event;
      }

  set id_event(value:number){
      this._id_event=value;
      }


  constructor(id_table:number, price:number, type:string, available:string, booked:string, id_event:number) {
      this._id_table = id_table;
      this._price = price;
      this._type = type;
      this._available = available;
      this._booked = booked;
          this._id_event = id_event;
      }
}
