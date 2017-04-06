import {BottleEntity} from "./bottle-entity";
import {TicketEntity} from "./ticket-entity";
import {TableEntity} from "./table-entity";
import {PhotoEntity} from "./photo-entity";
import {UserEntity} from "./user";

export class EventEntity {
  private _id_event: number;
  private _club_name: string;
  private _date: string;
  private _location: string;
  private _club_capacity: string;
  private _party_name: string;
  private _zip_code: string;
  private _bottles: BottleEntity[];
  private _tickets:TicketEntity[];
  private _tables: TableEntity[];
  private _photos:PhotoEntity[];
  private _users: UserEntity[];


  get id_event():number{
      return this._id_event;
      }

  set id_event(value:number){
      this._id_event=value;
      }

  get club_name():string{
      return this._club_name;
      }

  set club_name(value:string){
      this._club_name=value;
      }

  get date():string{
      return this._date;
      }

  set date(value:string){
      this._date=value;
      }

  get location():string{
      return this._location;
      }

  set location(value:string){
      this._location=value;
      }

  get club_capacity():string{
      return this._club_capacity;
      }

  set club_capacity(value:string){
      this._club_capacity=value;
      }

  get party_name():string{
      return this._party_name;
      }

  set party_name(value:string){
      this._party_name=value;
      }

  get zip_code():string{
      return this._zip_code;
      }

  set zip_code(value:string){
      this._zip_code=value;
      }

  get bottles():BottleEntity[]{
      return this._bottles;
      }

  set bottles(value:BottleEntity[]){
      this._bottles=value;
      }

  get tickets():TicketEntity[]{
      return this._tickets;
      }

  set tickets(value:TicketEntity[]){
      this._tickets=value;
      }

  get tables():TableEntity[]{
      return this._tables;
      }

  set tables(value:TableEntity[]){
      this._tables=value;
      }

  get photos():PhotoEntity[]{
      return this._photos;
      }

  set photos(value:PhotoEntity[]){
      this._photos=value;
      }

  get users():UserEntity[]{
      return this._users;
      }

  set users(value:UserEntity[]){
      this._users=value;

  }


  constructor(id_event:number = 1, club_name:string = "Noname club", date:string = "01.01.2000", location:string = "No location", club_capacity:string = "10", party_name:string = "Noname party", zip_code:string = "78648", bottles:BottleEntity[] = [], tickets:TicketEntity[] = [], tables:TableEntity[] = [], photos:PhotoEntity[] = [], users:UserEntity[] = []) {
      this._id_event = id_event;
      this._club_name = club_name;
      this._date = date;
      this._location = location;
      this._club_capacity = club_capacity;
      this._party_name = party_name;
      this._zip_code = zip_code;
      this._bottles = bottles;
      this._tickets = tickets;
          this._tables = tables;
          this._photos = photos;
          this._users = users;
      }
}
