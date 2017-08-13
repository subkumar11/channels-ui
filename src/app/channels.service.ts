import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ChannelGroup } from './channelgroup';

@Injectable()
export class ChannelsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private channelsUrl = '/channels/v1/channels/groupedByDate';  // URL to web api

  constructor(private http: Http) { }

  getChannelGroups(): Promise<ChannelGroup[]> {
    return this.http.get(this.channelsUrl)
               .toPromise()
               .then(response => response.json().channelGroups.groups as ChannelGroup[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
