import {
    Component,
    computed,
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
    DOCUMENT,
} from '@angular/core';
import {MatMiniFabAnchor, MatMiniFabButton} from '@angular/material/button';

import {forkJoin, fromEvent, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

const Z_INDEX_ITEM = 23;

export type Direction = 'up' | 'down' | 'left' | 'right';

type MiniFab = MatMiniFabButton;

function getHostElement(miniFab: MiniFab): HTMLElement {
    return miniFab._elementRef.nativeElement;
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
    private readonly anchors = contentChildren(MatMiniFabAnchor);
    private readonly miniFabs = computed(() => [...this.buttons(), ...this.anchors()]);

    private readonly initMiniFabStates = effect(() => {
        this.miniFabs().forEach((matMini, i) => {
            const hostElement = getHostElement(matMini);
            this.renderer.addClass(hostElement, 'eco-fab-action-item');
            this.changeElementStyle(hostElement, 'z-index', (Z_INDEX_ITEM - i).toString());
        });

        this.parent.setActionsVisibility();
    });

    /**
     * Whether the mini-fab exist in DOM
     */
    protected miniFabVisible = false;

    /**
     * The timeout ID for the callback to show the mini-fabs
     */
    private showMiniFabAnimation: ReturnType<typeof setTimeout> | undefined;

    /**
     * When we will remove mini-fab from DOM, after the animation is complete
     */
    private hideMiniFab: Subscription | null = null;

    public show(): void {
        this.resetAnimationState();
        this.miniFabVisible = true;

        this.showMiniFabAnimation = setTimeout(() => {
            this.miniFabs().forEach((miniFab, i) => {
                const hostElement = getHostElement(miniFab);

                this.changeElementStyle(hostElement, 'transition-delay', this.transitionDelay(i));
                this.changeElementStyle(hostElement, 'transform', 'scale(1)');
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

        const miniFabs = this.miniFabs();
        if (!miniFabs.length) {
            this.miniFabVisible = false;
            return;
        }

        const obs = [...miniFabs].reverse().map((miniFab, i) => {
            const hostElement = getHostElement(miniFab);

            this.changeElementStyle(hostElement, 'transition-delay', this.transitionDelay(i));
            this.changeElementStyle(hostElement, 'transform', 'scale(0)');

            return fromEvent(hostElement, 'transitionend').pipe(take(1));
        });

        // Wait for all animations to finish, then destroy their elements
        this.hideMiniFab = forkJoin(obs).subscribe(() => (this.miniFabVisible = false));
    }

    private transitionDelay(i: number): string {
        const total = 100; // Maximum of 100 ms seconds for all cumulated delays

        const length = this.miniFabs().length;
        const transitionDelayOne = length ? total / length : 0;
        const transitionDelay = transitionDelayOne * i;

        return transitionDelay.toString() + 'ms';
    }

    private changeElementStyle(elem: HTMLElement, style: string, value: string): void {
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
        if (this.open()) {
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
        if (this.open()) {
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
        this.parent.toggle();
        event.stopPropagation();
    }
}
