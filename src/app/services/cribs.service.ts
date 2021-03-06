import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: Http) { }
  
  getAllCribs() {
    return this.http.get('data/cribs.json');
  }

}
