import {EventEntity} from './event-entity';
/**
 * Created by igorkasyanenko on 07.03.17.
 */
export class UserEntity {

  private _id_user: number;

  private _userName: string;

  private _phoneNumber: string;

  private _email: string;

  private _emergencyContact: string;

  private _password: string;

  private _enable: boolean;

  private _verified: boolean;

  private _updatedDate: string;

  private _createdDate: string;

  private _billingEmail: string;

  private _role: any;

  private _billing: any;

  private _events: EventEntity[];


  // for session
  private _token: string;


  get id_user(): number {
    return this._id_user;
  }

  set id_user(value: number) {
    this._id_user = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get emergencyContact(): string {
    return this._emergencyContact;
  }

  set emergencyContact(value: string) {
    this._emergencyContact = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get enable(): boolean {
    return this._enable;
  }

  set enable(value: boolean) {
    this._enable = value;
  }

  get verified(): boolean {
    return this._verified;
  }

  set verified(value: boolean) {
    this._verified = value;
  }

  get updatedDate(): string {
    return this._updatedDate;
  }

  set updatedDate(value: string) {
    this._updatedDate = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get billingEmail(): string {
    return this._billingEmail;
  }

  set billingEmail(value: string) {
    this._billingEmail = value;
  }

  get role(): any {
    return this._role;
  }

  set role(value: any) {
    this._role = value;
  }

  get billing(): any {
    return this._billing;
  }

  set billing(value: any) {
    this._billing = value;
  }

  get events(): EventEntity[] {
    return this._events;
  }

  set events(value: EventEntity[]) {
    this._events = value;
  }


  get token(): string {
    return this._token;
  }


  set token(value: string) {
    this._token = value;
  }

  constructor(id_user: number = 1, userName: string = 'Unnamed', phoneNumber: string = '0000', email: string = 'email@email.email', emergencyContact: string = '0000', password: string = 'passw', enable: boolean = true, updatedDate: string = 'date', createdDate: string = 'date', billingEmail: string = 'billing@email.email', role: any = 'role', billing: any = 'billing id', events: EventEntity[] = []) {
    this._id_user = id_user;
    this._userName = userName;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._emergencyContact = emergencyContact;
    this._password = password;
    this._enable = enable;
    this._updatedDate = updatedDate;
    this._createdDate = createdDate;
    this._billingEmail = billingEmail;
    this._role = role;
    this._billing = billing;
    this._events = events;
  }
}
