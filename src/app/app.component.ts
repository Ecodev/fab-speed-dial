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

    public open = false;
    public spin = false;
    public direction = 'up';
    public animationMode = 'fling';

    get fixed(): boolean {
        return this._fixed;
    }

    set fixed(fixed: boolean) {
        this._fixed = fixed;
        if (this._fixed) {
            this.open = true;
        }
    }

    public stopPropagation(event: Event): void {
        // Prevent the click to propagate to document and trigger
        // the FAB to be closed automatically right before we toggle it ourselves
        event.stopPropagation();
    }

    public doAction(event: any) {
        console.log(event);
    }
}
