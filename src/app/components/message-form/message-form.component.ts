import { Component, OnInit, Input } from '@angular/core';
import { RBotService } from '../../services/rbot.service';
import { Message } from '../../models';

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
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', new Date())
      );
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
