import { Component, OnInit, Input } from '@angular/core';
import { RBotService } from '../../services/rbot.service';
import { Message } from '../../models';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private rBotService: RBotService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.rBotService.getResponse(this.message.content).subscribe(res => {
      const rJson: string[] = Array.of(res.text)[0];
      console.log('Cant: ' + rJson.length);
      for (let i = 0; i < rJson.length; i++) {
        console.log('Resp: ' + rJson[i]);
        setTimeout(() => {
          this.messages.push(new Message(rJson[i], 'assets/images/bot.png', new Date()));
        }, 1000 * (i + 1));
      }
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
