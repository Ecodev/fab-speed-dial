import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
}
