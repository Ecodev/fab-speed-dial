import { async, TestBed } from '@angular/core/testing';

import { EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent } from './fab-speed-dial';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';

describe('FabSpeedDial', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent, EcoFabSpeedDialActionsComponent, TestAppComponent],
        });

    }));

    it('should apply direction class based on direction', () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-up')).toBeTruthy();

        testComponent.direction = 'down';
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-down')).toBeTruthy();

        testComponent.direction = 'right';
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-right')).toBeTruthy();

        testComponent.direction = 'left';
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-left')).toBeTruthy();
        // also check if the other class from before is removed
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-right')).toBeFalsy();

    });

    it('should apply openend class trigger button clicked', () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));
        const triggerButtonDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial-trigger button'));

        triggerButtonDebugElement.nativeElement.click();
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();
        triggerButtonDebugElement.nativeElement.click();

        fixture.detectChanges();
        // check if the class is removed afterwards
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();

    });

    it('should apply opened class when property open is set', () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        testComponent.open = true;
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();
        testComponent.open = false;
        fixture.detectChanges();
        // check if the class is removed afterwards
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();
    });

    it('should close when action button is clicked', () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        testComponent.open = true;
        fixture.detectChanges();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();

        const actionButton = fixture.debugElement.query(By.css('eco-fab-speed-dial-actions button:first-child'));
        actionButton.nativeElement.click();
        fixture.detectChanges();
        // check if the class is removed after click
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();

    });

    it('should call "show" method of all fabActions', () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const testComponent = fixture.debugElement.componentInstance;

        spyOn(fixture.componentInstance.fabSpeedDial, 'setActionsVisibility').and.callThrough();
        spyOn(fixture.componentInstance.fabActions, 'show').and.callThrough();

        testComponent.open = true;
        fixture.detectChanges();

        expect(fixture.componentInstance.fabSpeedDial.setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions.show).toHaveBeenCalled();

    });

});

/** Test component that contains an fab speed dial buttons */
@Component({
    template: `
        <eco-fab-speed-dial [direction]="direction" [(open)]="open" #fabSpeedDial>
            <eco-fab-speed-dial-trigger>
                <button mat-fab>check</button>
            </eco-fab-speed-dial-trigger>

            <eco-fab-speed-dial-actions #fabActions>
                <button mat-mini-fab>add</button>
                <button mat-mini-fab>edit</button>
                <button mat-mini-fab>menu</button>
            </eco-fab-speed-dial-actions>
        </eco-fab-speed-dial>
    `
})
class TestAppComponent {
    @ViewChild(EcoFabSpeedDialActionsComponent)
    public fabActions: EcoFabSpeedDialActionsComponent;
    @ViewChild(EcoFabSpeedDialComponent)
    public fabSpeedDial: EcoFabSpeedDialComponent;
    public direction = 'up';
    public open: boolean;
    clickCount = 0;
    isDisabled = false;
    rippleDisabled = false;

    tabIndex: number;

    increment() {
        this.clickCount++;
    }
}
