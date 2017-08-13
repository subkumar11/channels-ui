import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }        from './app.component';
import { ChannelComponent }   from './channel.component';
import { ChannelGroupComponent }   from './channelgroup.component';
import { ChannelsService }     from './channels.service';
import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ChannelComponent,
    ChannelGroupComponent
  ],
  providers: [ ChannelsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
