import { Injectable } from '@angular/core';

import {Http, Response} from "@angular/http";

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

export interface Item{
  id:string;
  name:string;
  available:string;
  currentTransaction:string;
  transactionHistory:string[];
}
@Injectable()
export class InventoryService {

  constructor(private _http:HttpClient) { }

  getItemList():Observable<any>{
    const url="https://pod-hdb-api.herokuapp.com/inventory"
    return this._http.get(url);
  }
  getItem(id:string):Observable<any>{
    const url="https://pod-hdb-api.herokuapp.com/inventory/"+id;
    return this._http.get(url);
  }
  addItem(id, name, available):Observable<any>{
    const url="https://pod-hdb-api.herokuapp.com/inventory/new"
    const payload={
      id:id,
      name:name,
      available:available,
      currentTransaction:null,
      transactionHistory:[]
    }
    return this._http.post(url, JSON.stringify(payload));
  }
  removeItem(id:string){
    const url="https://pod-hdb-api.herokuapp.com/inventory/delete/id"
    return this._http.post(url, id);
  }
  
}
