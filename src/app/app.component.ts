import { Component } from '@angular/core';
import { Message } from '@app/models';
import { MessageType } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png', null, MessageType.USER_SAY);
    this.messages = [
      new Message('Asistente Virtual @rBot', 'assets/images/bot.svg', new Date(), MessageType.BOT_SAY)
    ];
  }


}
