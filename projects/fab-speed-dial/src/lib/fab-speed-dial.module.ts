import {NgModule} from '@angular/core';
import {
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from './fab-speed-dial';

const components = [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent];

@NgModule({
    imports: components,
    exports: components,
})
export class EcoFabSpeedDialModule {}
