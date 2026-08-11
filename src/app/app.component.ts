import {Component, signal} from '@angular/core';
import {
    type Direction,
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
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public readonly open = signal(false);
    public readonly spin = signal(false);
    public readonly direction = signal<Direction>('up');

    public stopPropagation(event: Event): void {
        // Prevent the click to propagate to document and trigger
        // the FAB to be closed automatically right before we toggle it ourselves
        event.stopPropagation();
    }

    public doAction(event: string): void {
        console.log(event);
    }
}
