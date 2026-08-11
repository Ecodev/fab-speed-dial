import {TestBed} from '@angular/core/testing';
import {
    type Direction,
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from './fab-speed-dial';
import {By} from '@angular/platform-browser';
import {Component, model, signal, viewChild} from '@angular/core';
import {describe, expect, it, vi} from 'vitest';

describe('FabSpeedDial', () => {
    it('should apply direction class based on direction', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-up')).toBeTruthy();

        testComponent.direction.set('down');
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-down')).toBeTruthy();

        testComponent.direction.set('right');
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-right')).toBeTruthy();

        testComponent.direction.set('left');
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-left')).toBeTruthy();
        // also check if the other class from before is removed
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-right')).toBeFalsy();
    });

    it('should apply opened class trigger button clicked', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));
        const triggerButtonDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial-trigger button'));
        await fixture.whenStable();

        triggerButtonDebugElement.nativeElement.click();
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();
        triggerButtonDebugElement.nativeElement.click();

        await fixture.whenStable();
        // check if the class is removed afterwards
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();
    });

    it('should apply opened class when property open is set', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        testComponent.open.set(true);
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();
        testComponent.open.set(false);
        await fixture.whenStable();
        // check if the class is removed afterwards
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();
    });

    it('should close when action button is clicked', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const speedDialDebugElement = fixture.debugElement.query(By.css('eco-fab-speed-dial'));

        testComponent.open.set(true);
        await fixture.whenStable();
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeTruthy();

        const actionButton = fixture.debugElement.query(By.css('eco-fab-speed-dial-actions button:first-child'));
        actionButton.nativeElement.click();
        await fixture.whenStable();
        // check if the class is removed after click
        expect(speedDialDebugElement.nativeElement.classList.contains('eco-opened')).toBeFalsy();
    });

    it('should call "show" method of all fabActions', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const testComponent = fixture.debugElement.componentInstance;
        await fixture.whenStable();

        vi.spyOn(fixture.componentInstance.fabSpeedDial(), 'setActionsVisibility');
        vi.spyOn(fixture.componentInstance.fabActions(), 'show');

        testComponent.open.set(true);
        await fixture.whenStable();

        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().show).toHaveBeenCalled();
    });

    it('should click on document testElement to hide all fabActions', async () => {
        const fixture = TestBed.createComponent(TestAppComponent);
        const testComponent = fixture.debugElement.componentInstance;
        await fixture.whenStable();

        const actionsSpy = vi.spyOn(fixture.componentInstance.fabSpeedDial(), 'setActionsVisibility');
        vi.spyOn(fixture.componentInstance.fabActions(), 'show');
        vi.spyOn(fixture.componentInstance.fabActions(), 'hide');

        testComponent.open.set(true);
        await fixture.whenStable();
        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().show).toHaveBeenCalled();
        actionsSpy.mockClear();

        const actionButton = fixture.debugElement.query(By.css('.testElement'));
        actionButton.nativeElement.click();
        await fixture.whenStable();

        expect(fixture.componentInstance.fabSpeedDial().setActionsVisibility).toHaveBeenCalled();
        expect(fixture.componentInstance.fabActions().hide).toHaveBeenCalled();
    });
});

/** Test component that contains an fab speed dial buttons */
@Component({
    imports: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialTriggerComponent, EcoFabSpeedDialComponent],
    template: `
        <div>
            <eco-fab-speed-dial [direction]="direction()" [(open)]="open">
                <eco-fab-speed-dial-trigger>
                    <button matFab>check</button>
                </eco-fab-speed-dial-trigger>

                <eco-fab-speed-dial-actions>
                    <button matMiniFab>add</button>
                    <button matMiniFab>edit</button>
                    <button matMiniFab>menu</button>
                </eco-fab-speed-dial-actions>
            </eco-fab-speed-dial>
            <div class="testElement">Test element</div>
        </div>
    `,
})
class TestAppComponent {
    public readonly fabActions = viewChild.required(EcoFabSpeedDialActionsComponent);
    public readonly fabSpeedDial = viewChild.required(EcoFabSpeedDialComponent);
    public readonly direction = signal<Direction>('up');
    public readonly open = model(false);
}
