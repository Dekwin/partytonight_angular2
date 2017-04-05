export class BottleEntity {
  
  private _id_bottle:number;
  private _name:string;
  private _price:string;
  private _type:string;
  private _available:string;
  private _booked:string;
  private _createdDate:string;
  private _id_event:number;


    get id_bottle():number {
      return this._id_bottle;
    }

  set id_bottle(value:number){
      this._id_bottle=value;
      }

  get name():string{
      return this._name;
      }

  set name(value:string){
      this._name=value;
      }

  get price():string{
      return this._price;
      }

  set price(value:string){
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

  get createdDate():string{
      return this._createdDate;
      }

  set createdDate(value:string){
      this._createdDate=value;
      }

  get id_event():number{
      return this._id_event;
      }

  set id_event(value:number){
      this._id_event=value;
      }


  constructor(id_bottle:number, name:string, price:string, type:string, available:string, booked:string, createdDate:string, id_event:number) {
      this._id_bottle = id_bottle;
      this._name = name;
      this._price = price;
      this._type = type;
      this._available = available;
      this._booked = booked;
      this._createdDate = createdDate;
          this._id_event = id_event;
      }
}
