import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';

import { NgxTabsLibModule } from 'ngx-tabs-lib';

@NgModule({
  imports: [
    BrowserModule,
    NgxTabsLibModule,

    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
