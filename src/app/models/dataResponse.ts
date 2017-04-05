/**
 * Created by igorkasyanenko on 11.03.17.
 */
export class DataResponse<T> {
  count: number;
  items: T[];
  
  constructor(count:number, items:T[]) {
      this.count = count;
      this.items = items;
      }
}
