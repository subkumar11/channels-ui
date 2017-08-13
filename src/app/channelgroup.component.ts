import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Channel }           from './channel';
import { ChannelGroup }      from './channelgroup';
import { ChannelsService }   from './channels.service';

@Component({
  selector: 'channel-group',
  templateUrl: './channelgroup.component.html'
})
export class ChannelGroupComponent implements OnInit {
  channelGroups: ChannelGroup[];

  constructor(
    private channelsService: ChannelsService,
    private router: Router) { }

  getChannelGroups(): void {
    this.channelsService
        .getChannelGroups()
        .then(channelGroups => this.channelGroups = channelGroups);
  }

  ngOnInit(): void {
    this.getChannelGroups();
  }

  getFormattedDate(dateStr: string): string {
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

    var date = new Date(parseInt(dateStr));

    return (dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
  }
}
