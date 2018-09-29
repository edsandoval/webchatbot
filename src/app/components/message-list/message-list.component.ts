import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Message } from '../../models';
import { MessageItemComponent } from '../message-item/message-item.component';

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

  constructor(private mScrollbarService: MalihuScrollbarService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
    this.mScrollbarService.initScrollbar('#chatlist',
      { axis: 'y',
        theme: 'inset-dark',
        scrollButtons: { enable: true }, advanced: { autoExpandHorizontalScroll: true },
        scrollbarPosition: 'outside'
      });
  }

  // TODO: Metodo scroll to Botton no funciona!!!
  private scrollToBottom(): void {
    const scrollToParameterOptions = <MCustomScrollbar.ScrollToParameterOptions> {
      scrollEasing: 'easeOut',
    };
    this.mScrollbarService.scrollTo('#chatlist', 'last', scrollToParameterOptions);
    this.mScrollbarService.update('#chatlist');
  }

  ngOnInit() {
  }

}
