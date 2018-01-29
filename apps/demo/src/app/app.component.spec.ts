import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [EcoFabSpeedDialModule,

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
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
