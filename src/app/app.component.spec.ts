import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';

import {AppComponent} from './app.component';
import {EcoFabSpeedDialModule} from '@ecodev/fab-speed-dial';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
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
            declarations: [AppComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
