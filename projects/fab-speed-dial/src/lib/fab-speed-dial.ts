import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    AfterContentInit,
    ElementRef,
    Renderer2,
    ContentChild,
    HostBinding,
    HostListener, Injector, QueryList, ContentChildren, Inject, OnDestroy,
} from '@angular/core';
import { MatButton } from '@angular/material';
import { DOCUMENT } from '@angular/common';

const Z_INDEX_ITEM = 23;

export type Direction = 'up' | 'down' | 'left' | 'right';
export type AnimationMode = 'fling' | 'scale';

@Component({
    selector: 'eco-fab-speed-dial-actions',
    template: `
        <ng-content select="[mat-mini-fab]"></ng-content>`,
})
export class EcoFabSpeedDialActionsComponent implements AfterContentInit {
    private _parent: EcoFabSpeedDialComponent;

    @ContentChildren(MatButton) _buttons: QueryList<MatButton>;

    constructor(injector: Injector, private renderer: Renderer2) {
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }

    ngAfterContentInit(): void {
        this._buttons.changes.subscribe(() => {
            this.initButtonStates();
            this._parent.setActionsVisibility();
        });

        this.initButtonStates();
    }

    private initButtonStates() {
        this._buttons.toArray().forEach((button, i) => {
            this.renderer.addClass(button._getHostElement(), 'eco-fab-action-item');
            this.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
        });
    }

    show() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode === 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + (65 * i);
                    transform = 'scale(1)';
                } else {
                    transform = this.getTranslateFunction('0');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', '1');
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            });
        }
    }

    hide() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let opacity = '1';
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode === 'scale') {
                    transitionDelay = 3 - (65 * i);
                    transform = 'scale(0)';
                    opacity = '0';
                } else {
                    transform = this.getTranslateFunction((55 * (i + 1) - (i * 5)) + 'px');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', opacity);
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            });
        }
    }

    private getTranslateFunction(value: string) {
        const dir = this._parent.direction;
        const translateFn = (dir === 'up' || dir === 'down') ? 'translateY' : 'translateX';
        const sign = (dir === 'down' || dir === 'right') ? '-' : '';
        return translateFn + '(' + sign + value + ')';
    }

    private changeElementStyle(elem: any, style: string, value: string) {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setStyle(elem, style, value);
    }
}

@Component({
    selector: 'eco-fab-speed-dial',
    template: `
        <div class="eco-fab-speed-dial-container">
            <ng-content select="eco-fab-speed-dial-trigger"></ng-content>
            <ng-content select="eco-fab-speed-dial-actions"></ng-content>
        </div>
    `,
    styleUrls: ['fab-speed-dial.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class EcoFabSpeedDialComponent implements OnDestroy, AfterContentInit {
    private isInitialized = false;
    private _direction: Direction = 'up';
    private _open = false;
    private _animationMode: AnimationMode = 'fling';
    private _fixed = false;
    private _documentListener: (() => void) | null;

    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     */
    @Input() get fixed(): boolean {
        return this._fixed;
    }
    set fixed(fixed: boolean) {
        this._fixed = fixed;
        this._processOutsideClickState();
    }

    /**
     * Whether this speed dial is opened
     */
    @HostBinding('class.eco-opened')
    @Input() get open(): boolean {
        return this._open;
    }

    set open(open: boolean) {
        const previousOpen = this._open;
        this._open = open;
        if (previousOpen !== this._open) {
            this.openChange.emit(this._open);
            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */
    @Input() get direction(): Direction {
        return this._direction;
    }

    set direction(direction: Direction) {
        const previousDirection = this._direction;
        this._direction = direction;
        if (previousDirection !== this.direction) {
            this._setElementClass(previousDirection, false);
            this._setElementClass(this.direction, true);

            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */
    @Input() get animationMode(): AnimationMode {
        return this._animationMode;
    }

    set animationMode(animationMode: AnimationMode) {
        const previousAnimationMode = this._animationMode;
        this._animationMode = animationMode;
        if (previousAnimationMode !== this._animationMode) {
            this._setElementClass(previousAnimationMode, false);
            this._setElementClass(this.animationMode, true);

            if (this.isInitialized) {
                // To start another detect lifecycle and force the "close" on the action buttons
                Promise.resolve(null).then(() => this.open = false);
            }
        }
    }

    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ContentChild(EcoFabSpeedDialActionsComponent) _childActions: EcoFabSpeedDialActionsComponent;

    constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {
    }

    ngAfterContentInit(): void {
        this.isInitialized = true;
        this.setActionsVisibility();
        this._setElementClass(this.direction, true);
        this._setElementClass(this.animationMode, true);
    }

    ngOnDestroy() {
        this._unsetDocumentClickBindings();
    }

    /**
     * Toggle the open state of this speed dial
     */
    public toggle(): void {
        this.open = !this.open;
    }

    @HostListener('click')
    _onClick(): void {
        if (!this.fixed && this.open) {
            this.open = false;
        }
    }

    setActionsVisibility(): void {
        if (!this._childActions) {
            return;
        }

        if (this.open) {
            this._childActions.show();
        } else {
            this._childActions.hide();
        }
        this._processOutsideClickState();
    }

    private _setElementClass(elemClass: string, isAdd: boolean): void {
        const finalClass = `eco-${elemClass}`;
        if (isAdd) {
            this.renderer.addClass(this.elementRef.nativeElement, finalClass);
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
        }
    }

    private _processOutsideClickState() {
        if (this.fixed) {
            this._unsetDocumentClickBindings();
            return;
        }
        if (this.open) {
            this._setDocumentClickBindings();
        } else {
            this._unsetDocumentClickBindings();
        }
    }

    private _setDocumentClickBindings() {
        if (!this._documentListener) {
            this._documentListener = this.renderer.listen(this.document, 'click', () => {
                if (!this.fixed && this.open) {
                    this.open = false;
                }
            });
        }
    }

    private _unsetDocumentClickBindings() {
        if (this._documentListener) {
            this._documentListener();
            this._documentListener = null;
        }
    }

}

@Component({
    selector: 'eco-fab-speed-dial-trigger',
    template: `
        <ng-content select="[mat-fab]"></ng-content>`,
})
export class EcoFabSpeedDialTriggerComponent {
    private _parent: EcoFabSpeedDialComponent;

    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    @HostBinding('class.eco-spin') get sp() {
        return this.spin;
    }

    @Input() spin = false;

    constructor(injector: Injector) {
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }

    @HostListener('click', ['$event'])
    _onClick(event: any) {
        if (!this._parent.fixed) {
            this._parent.toggle();
            event.stopPropagation();
        }
    }

}
