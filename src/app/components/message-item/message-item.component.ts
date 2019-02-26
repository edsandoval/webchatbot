import { Component, OnInit, Input, Output } from '@angular/core';
import { Message } from '@app/models';
import { EventEmitter } from 'events';
import { RBotService } from '../../services/rbot.service';
import { MessageService } from '../../services/message.service';
import { MessageType } from '../../models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;
  BOT_SAY = MessageType.BOT_SAY;
  USER_SAY = MessageType.USER_SAY;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  clickButtonOption(payload: string) {
    console.log(payload);
    this.messageService.broadcast('OPTION_BUTTON_CLICKED', payload);
  }

}
