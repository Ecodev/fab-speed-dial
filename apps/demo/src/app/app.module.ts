import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgxTabsLibModule} from 'ngx-tabs-lib';

@NgModule({
  imports: [
    BrowserModule,
    NgxTabsLibModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
