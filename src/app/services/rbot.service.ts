import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RBotService {
  // Identificador del channel, tiene que estar dado de alta en el middletier.
  private CHANNEL_ID = '5bcfcf232c625d305951485e';

  // Url del middletier
  private rBotURL = 'http://localhost:8080/api/r-bot';

  constructor(private http: Http) {
  }

  public getResponse(query: string) {
    const data = {
      id: 1, // Identificador del cliente, TODO: deberia generarse para cada cliente distinto.
      channelId: this.CHANNEL_ID,
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
