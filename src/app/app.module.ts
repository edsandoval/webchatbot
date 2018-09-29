import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService, RasaService } from '@app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components'
import { RBotService } from './services/rbot.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MalihuScrollbarModule.forRoot(),
  ],
  providers: [
    DialogflowService,
    RBotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
