import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class NgxTabsLibModule {}
