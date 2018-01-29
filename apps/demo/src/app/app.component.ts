import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }

  private _fixed = false;

  public open: boolean = false;
  public spin: boolean = false;
  public direction: string = 'up';
  public animationMode: string = 'fling';

  get fixed(): boolean {
    return this._fixed;
  }

  set fixed(fixed: boolean) {
    this._fixed = fixed;
    if (this._fixed) {
      this.open = true;
    }
  }

  public doAction(event: any) {
    console.log(event);
  }
}
