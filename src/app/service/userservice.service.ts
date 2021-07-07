import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
token:string;
name:string;
isAuthenticate:boolean=false;
  constructor() { }
}
