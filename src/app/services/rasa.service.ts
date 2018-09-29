import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';

@Injectable()
export class RasaService {
  private baseURL: string = "http://localhost:5000/parse?q=";

  constructor(private http: Http) {}

  public getResponse(query: string) {
    const data = {q: query};
    return this.http.get(this.baseURL + query)
      .map(res => {
        console.log('Rasa Response: ' + res);
        return res.json();
      });
  }

}
