import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';

import { Message } from '../../models';
import { MessageItemComponent } from '../message-item/message-item.component';
import { PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, AfterViewInit {

  @Input('messages')
  private messages: Message[];
  sum = 100;

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(MessageItemComponent, { read: ElementRef } ) chatItems: QueryList<MessageItemComponent>;

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

  constructor() { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.onScrollToBottom();
    });
  }

  onScrollToBottom() {
    this.directiveScroll.scrollToBottom();
  }

  ngOnInit() {
  }

}
