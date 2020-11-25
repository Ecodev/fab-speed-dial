import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from './fab-speed-dial';

@NgModule({
    imports: [CommonModule],
    declarations: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent],
    exports: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent],
})
export class EcoFabSpeedDialModule {}
