import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '@app/models';
import { MessageType } from './models';
import { RBotService } from './services/rbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  bienvenido = '¡Bienvenido a @rBot!';
  presentacion = 'Soy Marcela el asistente virtual de ayuda en linea!\n';
  ayuda = '¿En que puedo ayudarlo?';

  constructor(private route: ActivatedRoute, private service: RBotService) {
    this.message = new Message('', 'assets/images/user.png', null, MessageType.USER_SAY);
    this.messages = [
      new Message(this.bienvenido + this.presentacion + this.ayuda, 'assets/images/bot.svg', new Date(), MessageType.BOT_SAY)
    ];

    this.route.queryParams.subscribe(params => {
      if (params) {
        const channelId = params.channelId;
        if (channelId) {
          console.log('> Override channelId ' + channelId);
          service.CHANNEL_ID = channelId;
        }
      }
    });
  }

}
