import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RBotService } from '../../services/rbot.service';
import { Message, MessageType } from '../../models';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input('message')
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private rBotService: RBotService, private messageService: MessageService) {
    this.subscription = messageService.subscribe('OPTION_BUTTON_CLICKED', (payload) => {
      this.message.content = payload;
      this.sendMessage();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public sendMessage(): void {
    if (this.message.content && this.message.content.trim().length > 0) {
      this.message.timestamp = new Date();
      this.messages.push(this.message);

      this.rBotService.getResponse(this.message.content).subscribe(res => {
        const rJson: any = Array.of(res.responses)[0];
        console.log('Cant: ' + rJson.length);
        for (let i = 0; i < rJson.length; i++) {
          console.log('Resp: ' + rJson[i].text);
          const message = new Message(rJson[i].text, 'assets/images/bot.svg', new Date(), MessageType.BOT_SAY);

          if (rJson[i].buttons) {
            message.buttons = rJson[i].buttons;
          }

          setTimeout(() => {
            this.messages.push(message);
          }, 1000 * (i + 1));
        }
      });

      this.message = new Message('', 'assets/images/user.png', null, MessageType.USER_SAY);
    }
  }

}
