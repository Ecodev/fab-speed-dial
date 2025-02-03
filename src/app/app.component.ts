import {Component} from '@angular/core';
import {
    Direction,
    EcoFabSpeedDialActionsComponent,
    EcoFabSpeedDialComponent,
    EcoFabSpeedDialTriggerComponent,
} from '@ecodev/fab-speed-dial';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        FormsModule,
        MatSlideToggleModule,
        MatIconModule,
        EcoFabSpeedDialComponent,
        EcoFabSpeedDialTriggerComponent,
        EcoFabSpeedDialActionsComponent,
    ],
})
export class AppComponent {
    private _fixed = false;

    public open = false;
    public spin = false;
    public direction: Direction = 'up';

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
