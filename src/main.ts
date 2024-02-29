import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
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
        ),
    ],
}).catch(err => console.error(err));
