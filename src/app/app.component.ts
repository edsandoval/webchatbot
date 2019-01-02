import { Component } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Asistente Virtual @rBot', 'assets/images/bot.svg', new Date())
    ];
  }


}
