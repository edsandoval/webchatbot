import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';

@Injectable()
export class DialogflowService {

  //private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private baseURL: string = "http://localhost:8080/api/v1/query";
  private token: string = environment.token;

  constructor(private http: Http){}

  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'es',
      sessionId: '9fe0374aea834f3ab5cbaa72a5f7163b'
    }
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .map(res => {
        return res.json()
      })
  }

  public getHeaders(){
    let headers = new Headers();
    //headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
