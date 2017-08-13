import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelGroupComponent }    from './channelgroup.component';

const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  { path: 'channels',  component: ChannelGroupComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
