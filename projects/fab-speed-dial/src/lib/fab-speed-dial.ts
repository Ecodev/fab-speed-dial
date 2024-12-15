import {
    Component,
    contentChild,
    contentChildren,
    effect,
    ElementRef,
    inject,
    input,
    model,
    OnDestroy,
    output,
    Renderer2,
    ViewEncapsulation,
} from '@angular/core';
import {MatMiniFabButton} from '@angular/material/button';
import {DOCUMENT} from '@angular/common';
import {forkJoin, fromEvent, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

const Z_INDEX_ITEM = 23;

export type Direction = 'up' | 'down' | 'left' | 'right';
export type AnimationMode = 'fling' | 'scale';

function getHostElement(button: MatMiniFabButton): any {
    return button._elementRef.nativeElement;
}

@Component({
    selector: 'eco-fab-speed-dial-actions',
    template: `@if (miniFabVisible) {
        <ng-content select="[mat-mini-fab]" />
    }`,
})
export class EcoFabSpeedDialActionsComponent {
    private readonly renderer = inject(Renderer2);

    private readonly parent = inject(EcoFabSpeedDialComponent);

    private readonly buttons = contentChildren(MatMiniFabButton);

    private readonly initButtonStates = effect(() => {
        this.buttons().forEach((button, i) => {
            this.renderer.addClass(getHostElement(button), 'eco-fab-action-item');
            this.changeElementStyle(getHostElement(button), 'z-index', '' + (Z_INDEX_ITEM - i).toString());
        });

        this.parent.setActionsVisibility();
    });

    /**
     * Whether the min-fab button exist in DOM
     */
    protected miniFabVisible = false;

    /**
     * The timeout ID for the callback to show the mini-fab buttons
     */
    private showMiniFabAnimation: ReturnType<typeof setTimeout> | undefined;

    /**
     * When we will remove mini-fab buttons from DOM, after the animation is complete
     */
    private hideMiniFab: Subscription | null = null;

    public show(): void {
        this.resetAnimationState();
        this.miniFabVisible = true;

        this.showMiniFabAnimation = setTimeout(() => {
            this.buttons().forEach((button, i) => {
                let transitionDelay = 0;
                let transform;
                if (this.parent.animationMode() === 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + 65 * i;
                    transform = 'scale(1)';
                } else {
                    transform = this.getTranslateFunction('0');
                }

                const hostElement = getHostElement(button);
                this.changeElementStyle(hostElement, 'transition-delay', transitionDelay.toString() + 'ms');
                this.changeElementStyle(hostElement, 'opacity', '1');
                this.changeElementStyle(hostElement, 'transform', transform);
            });
        }, 50); // Be sure that @if can show elements before trying to animate them
    }

    private resetAnimationState(): void {
        clearTimeout(this.showMiniFabAnimation);
        if (this.hideMiniFab) {
            this.hideMiniFab.unsubscribe();
            this.hideMiniFab = null;
        }
    }

    public hide(): void {
        this.resetAnimationState();

        const obs = this.buttons().map((button, i) => {
            let opacity = '1';
            let transitionDelay = 0;
            let transform;

            if (this.parent.animationMode() === 'scale') {
                transitionDelay = 3 - 65 * i;
                transform = 'scale(0)';
                opacity = '0';
            } else {
                transform = this.getTranslateFunction((55 * (i + 1) - i * 5).toString() + 'px');
            }

            const hostElement = getHostElement(button);

            this.changeElementStyle(hostElement, 'transition-delay', transitionDelay.toString() + 'ms');
            this.changeElementStyle(hostElement, 'opacity', opacity);
            this.changeElementStyle(hostElement, 'transform', transform);

            return fromEvent(hostElement, 'transitionend').pipe(take(1));
        });

        // Wait for all animation to finish, then destroy their elements
        this.hideMiniFab = forkJoin(obs).subscribe(() => (this.miniFabVisible = false));
    }

    private getTranslateFunction(value: string): string {
        const dir = this.parent.direction();
        const translateFn = dir === 'up' || dir === 'down' ? 'translateY' : 'translateX';
        const sign = dir === 'down' || dir === 'right' ? '-' : '';

        return translateFn + '(' + sign + value + ')';
    }

    private changeElementStyle(elem: any, style: string, value: string): void {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setStyle(elem, style, value);
    }
}

/** @dynamic @see https://github.com/angular/angular/issues/20351#issuecomment-344009887 */
@Component({
    selector: 'eco-fab-speed-dial',
    template: `
        <div class="eco-fab-speed-dial-container">
            <ng-content select="eco-fab-speed-dial-trigger" />
            <ng-content select="eco-fab-speed-dial-actions" />
        </div>
    `,
    styleUrl: './fab-speed-dial.scss',
    // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.eco-opened]': 'open()',
        '(click)': 'onClick()',
    },
})
export class EcoFabSpeedDialComponent implements OnDestroy {
    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly document = inject(DOCUMENT);

    private documentClickUnlistener: (() => void) | null = null;

    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     */
    public readonly fixed = input(false);
    private readonly processFixed = effect(() => {
        this.processOutsideClickState();
    });

    /**
     * Whether this speed dial is opened
     */
    public readonly open = model(false);
    private readonly processOpen = effect(() => {
        this.openChange.emit(this.open());
        this.setActionsVisibility();
    });

    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */
    public readonly direction = input<Direction>('up');
    private previousDirection: Direction = this.direction();
    private readonly processDirection = effect(() => {
        this.setElementClass(this.previousDirection, false);
        this.setElementClass(this.direction(), true);
        this.previousDirection = this.direction();

        this.setActionsVisibility();
    });

    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */
    public readonly animationMode = input<AnimationMode>('fling');
    private previousAnimationMode: AnimationMode = this.animationMode();
    private processAnimationMode = effect(() => {
        this.setElementClass(this.previousAnimationMode, false);
        this.setElementClass(this.animationMode(), true);
        this.previousAnimationMode = this.animationMode();
    });

    public readonly openChange = output<boolean>();

    private readonly childActions = contentChild.required(EcoFabSpeedDialActionsComponent);

    public ngOnDestroy(): void {
        this.unsetDocumentClickListener();
    }

    /**
     * Toggle the open state of this speed dial
     */
    public toggle(): void {
        this.open.update(open => !open);
    }

    protected onClick(): void {
        if (!this.fixed() && this.open()) {
            this.open.set(false);
        }
    }

    public setActionsVisibility(): void {
        if (this.open()) {
            this.childActions().show();
        } else {
            this.childActions().hide();
        }
        this.processOutsideClickState();
    }

    private setElementClass(elemClass: string, isAdd: boolean): void {
        const finalClass = `eco-${elemClass}`;
        if (isAdd) {
            this.renderer.addClass(this.elementRef.nativeElement, finalClass);
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
        }
    }

    private processOutsideClickState(): void {
        if (!this.fixed() && this.open()) {
            this.setDocumentClickListener();
        } else {
            this.unsetDocumentClickListener();
        }
    }

    private setDocumentClickListener(): void {
        if (!this.documentClickUnlistener) {
            this.documentClickUnlistener = this.renderer.listen(this.document, 'click', () => {
                this.open.set(false);
            });
        }
    }

    private unsetDocumentClickListener(): void {
        if (this.documentClickUnlistener) {
            this.documentClickUnlistener();
            this.documentClickUnlistener = null;
        }
    }
}

@Component({
    selector: 'eco-fab-speed-dial-trigger',
    template: ` <ng-content select="[mat-fab]" />`,
    host: {
        '(click)': 'onClick($event)',
        '[class.eco-spin]': 'spin()',
    },
})
export class EcoFabSpeedDialTriggerComponent {
    private readonly parent = inject(EcoFabSpeedDialComponent);

    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    public readonly spin = input(false);

    protected onClick(event: Event): void {
        if (!this.parent.fixed()) {
            this.parent.toggle();
            event.stopPropagation();
        }
    }
}
