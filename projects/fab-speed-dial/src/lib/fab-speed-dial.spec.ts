import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFabSpeedDialComponent } from './fab-speed-dial';

describe('EcoFabSpeedDialComponent', () => {
    let component: EcoFabSpeedDialComponent;
    let fixture: ComponentFixture<EcoFabSpeedDialComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EcoFabSpeedDialComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EcoFabSpeedDialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
