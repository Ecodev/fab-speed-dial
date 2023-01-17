import {Component} from '@angular/core';
import {AnimationMode, Direction} from '@ecodev/fab-speed-dial';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    private _fixed = false;

    public open = false;
    public spin = false;
    public direction: Direction = 'up';
    public animationMode: AnimationMode = 'fling';

    public get fixed(): boolean {
        return this._fixed;
    }

    public set fixed(fixed: boolean) {
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

    public doAction(event: string): void {
        console.log(event);
    }
}
