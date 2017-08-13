import { Component, Input } from '@angular/core';
import { Channel }          from './channel';

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: [ './channel.component.css' ]
})

export class ChannelComponent {
  @Input() channel: Channel;

  getFormattedTime(time: number): string {
    var suffix = (time <= 1159)? ' AM': ' PM';
    var timeStr = new String(((time > 1300)? time-1200 : time));
    return ([timeStr.slice(0, timeStr.length-2), ':', timeStr.slice(timeStr.length-2)].join('') + suffix);
  }
}
