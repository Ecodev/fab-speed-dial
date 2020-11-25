import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {EcoFabSpeedDialModule} from '@ecodev/fab-speed-dial';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [AppComponent],
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
export class AppModule {}
