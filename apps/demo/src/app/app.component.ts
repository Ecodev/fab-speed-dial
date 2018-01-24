import { Component, OnInit, ViewChild } from '@angular/core';
import { ɵTabsComponent as TabsComponent } from 'ngx-tabs-lib';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(TabsComponent) tabs: TabsComponent;

  constructor() {}

  ngOnInit() {
    console.log(this.tabs);
  }

}
