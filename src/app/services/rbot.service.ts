import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RBotService {
  private ID_BOT = 15248521;
  private rBotURL = 'http://localhost:8080/api/r-bot';

  constructor(private http: Http) {
  }

  public getResponse(query: string) {
    const data = {
      id: 1,
      idBot: this.ID_BOT,
      message: query,
      lang: 'es'
    };

    return this.http.post(this.rBotURL + '/dialog-request', data)
      .map(res => {
        console.log('rBot Middletier Response: ' + res);
        return res.json();
      });
  }

}
