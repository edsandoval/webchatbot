import { Component, OnInit, Input, Output } from '@angular/core';
import { Message } from '@app/models';
import { EventEmitter } from 'events';
import { RBotService } from '../../services/rbot.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  clickButtonOption(payload: string) {
    console.log(payload);
    this.messageService.broadcast('OPTION_BUTTON_CLICKED', payload);
  }

}
