import {TestBed} from '@angular/core/testing';
import {
    Direction,
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from './fab-speed-dial';
import {By} from '@angular/platform-browser';
import {Component, viewChild} from '@angular/core';

describe('FabSpeedDial', () => {
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

    it('should apply opened class trigger button clicked', () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));
        const triggerButtonDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial-trigger button'));
        fixture.detectChanges();

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
        fixture.detectChanges();

        spyOn(fixture.componentInstance.fabSpeedDial(), 'setActionsVisibility').and.callThrough();
        spyOn(fixture.componentInstance.fabActions(), 'show').and.callThrough();

        testComponent.open = true;
        fixture.detectChanges();

        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().show).toHaveBeenCalled();
    });

    it('should click on document testElement to hide all fabActions', () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const testComponent = fixture.debugElement.componentInstance;
        fixture.detectChanges();

        const actionsSpy = spyOn(fixture.componentInstance.fabSpeedDial(), 'setActionsVisibility').and.callThrough();
        spyOn(fixture.componentInstance.fabActions(), 'show').and.callThrough();
        spyOn(fixture.componentInstance.fabActions(), 'hide').and.callThrough();

        testComponent.open = true;
        fixture.detectChanges();

        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().show).toHaveBeenCalled();
        actionsSpy.calls.reset();

        const actionButton = fixture.debugElement.query(By.css('.testElement'));
        actionButton.nativeElement.click();
        fixture.detectChanges();

        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().hide).toHaveBeenCalled();
    });
});

/** Test component that contains an fab speed dial buttons */
@Component({
    imports: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialTriggerComponent, EcoFabSpeedDialComponent],
    template: `
        <div>
            <eco-fab-speed-dial [direction]="direction" [(open)]="open">
                <eco-fab-speed-dial-trigger>
                    <button mat-fab>check</button>
                </eco-fab-speed-dial-trigger>

                <eco-fab-speed-dial-actions>
                    <button mat-mini-fab>add</button>
                    <button mat-mini-fab>edit</button>
                    <button mat-mini-fab>menu</button>
                </eco-fab-speed-dial-actions>
            </eco-fab-speed-dial>
            <div class="testElement">Test element</div>
        </div>
    `,
})
class TestAppComponent {
    public readonly fabActions = viewChild.required(EcoFabSpeedDialActionsComponent);
    public readonly fabSpeedDial = viewChild.required(EcoFabSpeedDialComponent);
    public direction: Direction = 'up';
    public open = false;
}
