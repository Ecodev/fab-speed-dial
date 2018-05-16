import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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

import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        EcoFabSpeedDialModule,

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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
