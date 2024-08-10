import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITech } from '../interfaces/ITech';
import { IQSet } from '../interfaces/IQSet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string | undefined = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Tech
  getTechs() {
    return this.http.get(`${this.apiUrl}/tech`);
  }

  saveTech(data: ITech, id?: string) {
    return this.http.post(`${this.apiUrl}/tech/save`, {...data, id});
  }

  removeTech(id: string) {
    return this.http.delete(`${this.apiUrl}/tech/${id}`);
  }

  // End Tech

  // ==================================================================
  
  // QSet

  getQSet() {
    return this.http.get(`${this.apiUrl}/q-set`);
  }

  saveQSet(data: IQSet, id?: string) {
    return this.http.post(`${this.apiUrl}/q-set/save`, {...data, id});
  }

  // End QSet
}
