import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import {
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from './fab-speed-dial/fab-speed-dial';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TabsComponent,
        TabComponent,
        EcoFabSpeedDialActionsComponent,
        EcoFabSpeedDialComponent,
        EcoFabSpeedDialTriggerComponent,
    ],
    exports: [
        TabsComponent,
        TabComponent,
        EcoFabSpeedDialActionsComponent,
        EcoFabSpeedDialComponent,
        EcoFabSpeedDialTriggerComponent,
    ],
})
export class NgxTabsLibModule {
}
