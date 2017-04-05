import {EventEntity} from "./event-entity";
export class PhotoEntity {
  private _photo:string;
  private _eventEntity:EventEntity;


  get photo():string{
      return this._photo;
      }

  set photo(value:string){
      this._photo=value;
      }

  get eventEntity():EventEntity{
      return this._eventEntity;
      }

  set eventEntity(value:EventEntity){
      this._eventEntity=value;
      }


    constructor(photo:string, eventEntity:EventEntity) {
      this._photo = photo;
      this._eventEntity = eventEntity;
    }
}
